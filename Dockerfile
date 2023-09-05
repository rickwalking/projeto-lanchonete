###################
# LOCAL
###################

FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package*.json .
COPY prisma ./prisma/

RUN npm i
RUN npm ci

COPY . .

EXPOSE 3000

###################
# BUILD PARA PRODUCTION
###################

FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node prisma ./prisma/

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

RUN npm run prisma:generate

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/package*.json ./
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma


CMD [ "npm", "run", "start:migrate:prod" ]
