FROM base-image AS backend-build

WORKDIR /app/apps/server

COPY ./apps/server .
COPY --from=base-image /app/packages /app/packages

RUN pnpm install --offline --frozen-lockfile
RUN pnpm run build

CMD ["pnpm", "run", "start"]
