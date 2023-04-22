ARG port=7001
FROM node:16

WORKDIR /usr/src/app
COPY . .

RUN npm install && npm install pm2 -g

EXPOSE $port
CMD [ "pm2-runtime", "index.js" ]

HEALTHCHECK --interval=10s --timeout=1s --retries=3 --start-period=5s\
  CMD curl -f http://localhost:$port/ || exit 1