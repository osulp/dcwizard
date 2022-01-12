# Dockerfile for registry.library.oregonstate.edu/dcwizard
FROM alpine:latest

# Install base packages
RUN apk --no-cache update && \
  apk add --no-cache bash \
    curl \
    nginx \
    nodejs \
    npm \
    vim

# Clear out NGINX junk
# Create the /app directory tree
RUN rm -rf /etc/nginx/http.d && mkdir -p /app/build && chown -R nginx:nginx /app

# Copy Primo data into /app
#COPY --chown=nginx:nginx ./package-lock.json /app/package-lock.json
COPY --chown=nginx:nginx ./application/ /app/build/

# Build the app
#RUN cd /app/build && npm install && npm install react-scripts &&  npm run build

# Copy nginx config
COPY ./conf/nginx.conf /etc/nginx/nginx.conf

# Expose 80/tcp
EXPOSE 80/tcp

STOPSIGNAL SIGTERM

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
