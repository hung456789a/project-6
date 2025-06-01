# Build phase
FROM node:18 AS builder
WORKDIR /app
COPY src ./src
COPY package.json .
COPY public ./public
RUN npm install 
RUN npm run build

# Run phase
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Reverse proxy nếu backend cùng domain
# COPY nginx.conf /etc/nginx/conf.d/default.conf
