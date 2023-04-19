FROM node:16

WORKDIR /usr/src/app
COPY . .

RUN npm install && npm install pm2 -g

EXPOSE 7001
CMD [ "pm2-runtime", "index.js" ]