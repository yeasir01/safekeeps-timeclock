FROM node:16-alpine3.14
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]