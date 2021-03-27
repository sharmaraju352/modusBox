FROM node:10.11.0-alpine

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .
COPY .env .
COPY swagger.json .
COPY src src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]