FROM node:20.15.0
WORKDIR /app
COPY . /app/
RUN npm install 
RUN npm build
EXPOSE 3000

CMD ["npm","start"]