from node:14.15.3-alpine

ARG APP_PORT
ENV APP_PORT ${APP_PORT}
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY package*.json ./
COPY tsconfig.json ./
COPY . .
RUN npm i
RUN npm run build
COPY . .
EXPOSE ${APP_PORT}
CMD npm run start

