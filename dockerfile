FROM node:14.3

RUN mkdir /buscaxalapa

WORKDIR /buscaxalapa

COPY package.json /buscaxalapa/

RUN yarn install

COPY . /buscaxalapa/

EXPOSE 8000

CMD ["yarn", "start"]