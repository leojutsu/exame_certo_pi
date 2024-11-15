FROM node:22.11 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or any other package-related files)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (if needed)
RUN npm run build


# Use a smaller Node image for the final image
FROM node:22.11-slim

# Set the working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app ./

# Expose port 3000 (or whatever port your app uses)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
