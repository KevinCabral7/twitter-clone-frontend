FROM node:20.15.0-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json tsconfig.json ./

RUN npm install --silent

RUN npm run build

COPY . ./


CMD ["sh", "entrypoint.sh"]