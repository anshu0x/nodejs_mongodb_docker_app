FROM node:latest

WORKDIR /mongowithexpress

COPY package* .

RUN npm install

COPY . .

# EXPOSE 4000

CMD [ "npm","run","dev"]