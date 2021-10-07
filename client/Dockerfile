# Stage 1 - Build React App
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve static files using NGINX
FROM nginx:alpine:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /usr/src/app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]