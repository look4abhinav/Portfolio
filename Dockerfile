# Use Node v20 as recommended in your README
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy dependency definitions first to leverage Docker cache
COPY package.json ./

# Install dependencies
# We use 'npm i' as suggested in the README instructions
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default Vite port
EXPOSE 5173

# COMMAND: Directly run Vite via npx to bypass the disabled 'npm run dev' script
# --host 0.0.0.0 is required to make the server accessible outside the Docker container
CMD ["npx", "vite", "--host", "0.0.0.0"]