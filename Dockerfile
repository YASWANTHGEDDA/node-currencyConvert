FROM node:14

WORKDIR /app

COPY server.js .
COPY index.html .
COPY package.json .

RUN npm install

EXPOSE 2039

CMD [ "node", "server.js" ]