FROM node:20.18.0-bookworm

# Install OpenSSL
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package.json .

RUN npm install

COPY prisma ./prisma/
COPY . .

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
