FROM node:lts-alpine3.14 AS build


Run mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force
RUN npm install --force

COPY . .
EXPOSE 5000

CMD npm run dev

