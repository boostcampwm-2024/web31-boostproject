# FROM base-image AS server-build

# WORKDIR /app/apps/server

# COPY --from=base-image /app/node_modules /app/node_modules
# COPY --from=base-image /app/packages /app/packages

# COPY ./apps/server .

# RUN pnpm install
# RUN pnpm run build 

# EXPOSE 3000
# CMD ["pnpm", "run", "start"]

# base에서 시작하여 백엔드 빌드
FROM base AS backend-build

WORKDIR /app/apps/server
COPY apps/server ./
RUN pnpm run build

# 최종 런타임
FROM node:20 AS backend
WORKDIR /app
COPY --from=backend-build /app/apps/server/dist ./
CMD ["pnpm", "run", "start"]
