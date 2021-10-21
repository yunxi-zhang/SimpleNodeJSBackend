FROM node:13.12.0-alpine

WORKDIR /app
COPY ./bin ./bin 
COPY ./public ./public
COPY ./routes ./routes
COPY ./views ./views
COPY ./app.js ./app.js
COPY ./package.json ./package.json
RUN npm install

CMD ["npm", "start"]