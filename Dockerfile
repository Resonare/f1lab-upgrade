FROM node:20.18.0-bookworm

WORKDIR /app

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
