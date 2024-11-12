# FROM base-image AS client

# WORKDIR /app/apps/client

# COPY --from=base-image /app/node_modules /app/node_modules
# COPY --from=base-image /app/packages /app/packages

# COPY ./apps/client .

# RUN pnpm install
# RUN pnpm run build

# FROM nginx:alpine
# COPY --from=client /app/apps/client/dist /usr/share/nginx/html
# COPY --from=client /app/apps/client/public /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM base-image AS frontend-build

WORKDIR /app/apps/client
COPY apps/client ./
RUN pnpm run build

# 최종 Nginx로 제공
FROM nginx:alpine AS frontend
COPY --from=frontend-build /app/apps/client/dist /usr/share/nginx/html
 COPY --from=client /app/apps/client/public /usr/share/nginx/html