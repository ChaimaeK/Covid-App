#stage 1
FROM node:latest as node
WORKDIR /usr/src/app
COPY /vaccination-app/package.json /vaccination-app/package-lock.json ./
RUN npm install --force
COPY /vaccination-app .
RUN npm run build --prod

#stage 2
FROM nginx:alpine
#COPY /vaccination-app/nginx.conf /etc/nginx/nginx.conf
COPY --from=node /usr/src/app/dist/vaccination-app /usr/share/nginx/html
EXPOSE 4200