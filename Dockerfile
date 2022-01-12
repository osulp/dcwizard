# Dockerfile for registry.library.oregonstate.edu/dcwizard

# Build the builder container
#   install nodejs + npm
#   copy source to /build
#   run npm commands to generate output in /build/build for copying to app
FROM alpine:latest AS builder

# Install base packages
RUN apk --no-cache update && \
  apk add --no-cache bash \
    nodejs \
    npm 

# Create the /build directory tree
RUN mkdir -p /build

# Copy app source to /build
COPY ./application/ /build/

# Build the app
RUN cd /build && npm install && npm install react-scripts && npm run build

# Build the container to serve our app
FROM alpine:latest AS app

# Install base packages
RUN apk --no-cache update && \
  apk add --no-cache bash \
    nginx \
    vim && \
  rm -rf /etc/nginx/http.d

# Copy output from npm run build to nginx document root
COPY --from=builder /build/build /usr/share/nginx/html

# Copy nginx config
COPY ./conf/nginx.conf /etc/nginx/nginx.conf

# Expose 80/tcp
EXPOSE 80/tcp

STOPSIGNAL SIGTERM

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
