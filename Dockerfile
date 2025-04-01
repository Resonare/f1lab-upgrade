# Base Node image
FROM node:20-slim AS base

# Install OpenSSL and other dependencies
RUN apt-get update && apt-get install -y openssl sqlite3 ca-certificates

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy necessary files from the builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Ensure data directory exists and is writable
RUN mkdir -p /app/prisma/data && chmod 777 /app/prisma/data

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD npm run start
