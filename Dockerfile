FROM node:20.15.0
WORKDIR /app
COPY . /app/
RUN npm install 
EXPOSE 8080

CMD ["npm","start"]