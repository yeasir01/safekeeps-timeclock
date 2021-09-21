FROM node:16-alpine3.14

WORKDIR /client/

COPY package*.json .

RUN npm install -g http-server
RUN npm install

COPY . .

RUN npm run build

CMD ["http-server", "build"]