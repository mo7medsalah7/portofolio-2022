# Use Node.js LTS Alpine as the base image
FROM node:lts-alpine3.14 AS build

# Create a non-root user named 'appuser'
RUN adduser -D -g '' appuser

# Set the working directory for the application
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm cache clean --force && npm install --force

# Copy the rest of the application files
COPY . .

# Expose port 5000 (optional, for documentation purposes)
EXPOSE 5000

# Set the user to 'appuser' for subsequent commands
USER appuser

# Define the command to run when the container starts
CMD ["npm", "run", "dev"]
