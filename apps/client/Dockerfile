FROM base-image AS frontend-build
WORKDIR /app/apps/client
COPY ./apps/client .
COPY --from=base-image /app/packages /app/packages
RUN pnpm install --offline --frozen-lockfile
RUN pnpm run build

FROM nginx:alpine AS frontend
COPY --from=frontend-build /app/apps/client/dist /usr/share/nginx/html
COPY /apps/client/nginx.conf /etc/nginx/conf.d/default.conf
COPY /apps/client/ssl /etc/nginx/ssl

RUN chmod -R 755 /usr/share/nginx/html
RUN chmod 644 /etc/nginx/ssl/fullchain.pem
RUN chmod 600 /etc/nginx/ssl/privkey.pem
RUN chown -R nginx:nginx /usr/share/nginx/html /etc/nginx/ssl

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]