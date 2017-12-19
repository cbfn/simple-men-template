FROM node:carbon
RUN mkdir -p /var/www/api
WORKDIR /var/www/api
COPY package.json /var/www/api
RUN npm install
COPY . /var/www/api
EXPOSE 3001
CMD ["npm", "start"]