FROM nginx:alpine

RUN apk add --no-cache curl

RUN curl -o /etc/nginx/conf.d/default.conf https://raw.githubusercontent.com/wdhdev/psl-min/refs/heads/main/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

RUN rm ./*

RUN curl -o public_suffix_list.dat https://raw.githubusercontent.com/wdhdev/psl-min/refs/heads/main/list/public_suffix_list.dat
RUN curl -o public_suffix_list.min.dat https://raw.githubusercontent.com/wdhdev/psl-min/refs/heads/main/list/public_suffix_list.min.dat

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
