# Use the official Node.js 14 image
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the code to the working directory
COPY . .

# Expose port 4000
EXPOSE 4000

# Command to run the app
CMD ["npm", "start"]
