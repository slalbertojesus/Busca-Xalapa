FROM node:latest

RUN mkdir /buscaxalapa

WORKDIR /buscaxalapa

COPY package.json /buscaxalapa/

RUN npm install

COPY . /buscaxalapa/

EXPOSE 57937

CMD ["npm", "start"]