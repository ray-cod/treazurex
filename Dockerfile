# Dockerfile
FROM node:20

WORKDIR /app

COPY server/package*.json ./server/
RUN cd server && npm install

COPY . .

WORKDIR /app/server
CMD ["npm", "start"]