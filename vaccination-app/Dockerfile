#stage 1: Building Angular Image
FROM node:latest as node
WORKDIR /usr/local/app
COPY vaccination-app/ /usr/local/app/
RUN npm install --force
RUN npm run build

#stage 2 : Running The App
FROM nginx:latest
#COPY /vaccination-app/nginx.conf /etc/nginx/nginx.conf
COPY --from=node /usr/local/app/dist/vaccination-app /usr/share/nginx/html
EXPOSE 80
