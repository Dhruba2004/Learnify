# --- Build stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and bun.lockb (no package-lock.json)
COPY package.json bun.lockb ./

# Install dependencies (npm will still work with bun.lockb)
RUN npm install --legacy-peer-deps

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# --- Production stage ---
FROM node:20-alpine AS runner

WORKDIR /app

# Copy build output and node_modules
COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
