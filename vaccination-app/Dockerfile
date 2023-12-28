#stage 1: Building Angular Image
FROM node:latest as node
WORKDIR /vaccination-app
COPY /vaccination-app/package.json /vaccination-app/package-lock.json ./
RUN npm install --force
COPY /vaccination-app .
RUN npm run build

#stage 2 : Running The App
FROM nginx:alpine
COPY /vaccination-app/nginx.conf /etc/nginx/nginx.conf
COPY --from=node /vaccination-app/src /usr/share/nginx/html
EXPOSE 80