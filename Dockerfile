FROM node:latest

WORKDIR /mongowithexpress

COPY . /mongowithexpress

RUN npm install

# EXPOSE 4000

CMD [ "npm","run","dev"]