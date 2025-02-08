FROM node:18-alpine 
WORKDIR /app 
COPY . . 
RUN npm install 
EXPOSE 3030
CMD ["node", "server.js"]