FROM node:20.15.0
WORKDIR /app
COPY . /app/
RUN npm install 
EXPOSE $PORT

CMD ["npm","start"]