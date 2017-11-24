FROM node:8.7

RUN mkdir -p /var/www/api

WORKDIR /var/www/api

ADD . /var/www/api

RUN npm install

# ADD . /var/www/api

EXPOSE 3001

CMD ["npm", "start"]