FROM node:20.15.0-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

RUN npm build

CMD ["npm", "run", "preview"]