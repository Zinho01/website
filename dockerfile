# --------------------------
# 1. Build stage
# --------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build production version (outputs to /dist)
RUN npm run build

# --------------------------
# 2. Production stage
# --------------------------
FROM node:20-alpine AS production

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy build output from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Expose port 3000
EXPOSE 3000

# Serve the React build
CMD ["serve", "-s", "dist", "-l", "3000"]
