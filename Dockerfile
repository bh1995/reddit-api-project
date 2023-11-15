# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Use serve to serve your app
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["serve", "-s", "build"]