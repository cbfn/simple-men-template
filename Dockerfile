 # Create image based on the official Node 6 image from the dockerhub
FROM node:8.7

# Create a directory where our app will be placed
RUN mkdir -p /var/www/api

# Change directory so that our commands run inside this new directory
WORKDIR /var/www/api

# Copy dependency definitions
COPY package.json /var/www/api

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /var/www/api

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]