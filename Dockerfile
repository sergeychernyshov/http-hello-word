ARG port=7001
FROM node:16 as base

WORKDIR /usr/src/app
COPY . .

RUN npm install && npm install pm2 -g
CMD [ "pm2-runtime", "server.js" ]


FROM base as test
RUN npm install mocha chai request supertest
RUN ["npm", "test"]


FROM base as production
EXPOSE $port

HEALTHCHECK --interval=10s --timeout=1s --retries=3 --start-period=5s\
  CMD curl -f http://localhost:$port/ || exit 1