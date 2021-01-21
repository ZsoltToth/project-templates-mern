ARG APP_PORT=3000
FROM node:latest

WORKDIR /home/node/app

COPY package.json .
COPY src ./src

EXPOSE ${APP_PORT}

RUN npm install
CMD npm run start