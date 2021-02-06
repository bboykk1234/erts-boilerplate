FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /

RUN npm install
RUN useradd app
RUN chown -R app:app /app

USER app

EXPOSE 8000
