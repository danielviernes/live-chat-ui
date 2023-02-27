FROM node:18-alpine as base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./nginx.conf ./conf.d/default.conf
COPY --from=base /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]