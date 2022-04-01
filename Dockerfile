FROM node:16-alpine as base

FROM base as builder
WORKDIR /usr/src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm config set unsafe-perm true
USER node
RUN npm ci --only=production
COPY --chown=node:node --from=builder /usr/src/dist .

EXPOSE 3000
CMD ["node", "app.js"]
