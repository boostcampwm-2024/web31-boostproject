FROM base-image AS server-build

WORKDIR /app/apps/server

COPY --from=base-image /app/node_modules /app/node_modules
COPY --from=base-image /app/packages /app/packages

COPY ./apps/server .

RUN pnpm install
# app/apps/server 폴더 내에 dist 폴더 생겨남
RUN pnpm run build 

# FROM node:20-alplain AS server

# WORKDIR /app/server

# COPY --from=server-build /app/apps/server/dist ./dist
# COPY --from=server-build /app/node_modules ./node_modules 
# COPY --from=server-build /app/apps/server/package.json .

EXPOSE 3000
CMD ["pnpm", "run", "start"]
