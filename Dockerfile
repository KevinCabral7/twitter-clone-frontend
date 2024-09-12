FROM node:20.15.0
WORKDIR /app
COPY . /app/
RUN npm install 
EXPOSE 3000
RUN npm build

CMD ["npm","start"]