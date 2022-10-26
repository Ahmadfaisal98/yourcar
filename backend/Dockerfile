FROM node:14 AS development

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install -g @nestjs/cli
RUN npm install

RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN npm run build 

CMD ["sh", "-c", "npx typeorm migration:run && npm run start:prod"]