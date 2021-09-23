# Stage 1 - Used to build React App
FROM node:latest AS build-dependency
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve static files using NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-dependency /usr/src/app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]