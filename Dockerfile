FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default files
RUN rm ./*

# Copy files
COPY nginx.conf /etc/nginx/nginx.conf
COPY list/* ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
