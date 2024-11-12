FROM base AS backend-build
WORKDIR /app/apps/server
COPY apps/server ./
COPY --from=base /app/packages /app/packages
RUN pnpm install --offline --frozen-lockfile
RUN pnpm run build

FROM node:20-alpine AS backend
WORKDIR /app
COPY --from=backend-build /app/apps/server/dist ./
CMD ["pnpm", "run", "start"]
