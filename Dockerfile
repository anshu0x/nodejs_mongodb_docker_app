FROM node:latest

WORKDIR /mongowithexpress

ENV FLASK_APP=app.py

ENV FLASK_RUN_HOST=0.0.0.0

COPY . /mongowithexpress

RUN npm install

EXPOSE 8000

CMD [ "npm","run","dev"]