FROM base AS frontend-build
WORKDIR /app/apps/client
COPY apps/client ./
COPY --from=base /app/packages /app/packages
RUN pnpm install --offline --frozen-lockfile
RUN pnpm run build

FROM nginx:alpine AS frontend
COPY --from=frontend-build /app/apps/client/dist /usr/share/nginx/html
COPY --from=client /app/apps/client/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
