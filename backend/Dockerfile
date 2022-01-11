FROM node:16.10-alpine As builder
WORKDIR /usr/app

COPY package*.json ./
COPY prisma ./prisma/
COPY . .

RUN npm install && \
    npm run build && \
    npm prune --production

FROM node:16.10-alpine As final

WORKDIR /usr/app

COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/prisma ./prisma
COPY --from=builder /usr/app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main" ]
