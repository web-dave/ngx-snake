NgxSnake
=============================

This is a community project. Snake game.

# Techstack

## Techstack
- angular
- NestJs, Prisma
- Swagger
- rxjs

---

# Requirements

- node
- npm
- npx
- docker

---

# Installation/Development

1. Install all dependencies: `npm run installer`
2. Edit docker compose file in folder docker/{dev,local,test}
3. Edit dotnet (.env) file's in backend and frontend project
    1. See or better rename .env.template to .env
4. Start local db docker container: `npm run docker:local:up`
5. Prepare database with prisma: `npm run be:prisma`
6. (optional) use backend/prisma/demo-data.sql for mock entries
7. Auth0 is the default Identity Provider [See more](#identity-provider-Auth0)

---

# DEV Setup

* **INSTALL**: `npm run installer`
* clean all: `npm run clean`
* build all: `npm run build`
* test all: `npm run test`
* lint all: `npm run lint`

# Docker

* **start local db docker container**: `npm run docker:local:up`
* stop local db docker container: `npm run docker:local:down`
* start local db docker container for tests: `npm run docker:test:up`
* stop local db docker container for tests: `npm run docker:test:down`
* start dev stack (db, backend, frontend in docker): `npm run docker:dev:up`
* stop dev stack (db, backend, frontend in docker): `npm run docker:dev:down`

# Backend

* **first start - generate prisma client and deploy migrations to DB**: `npm run be:prisma`
* **development**: `npm run be:watch`
* clean: `npm run be:clean`
* build: `npm run be:build`
* test: `npm run be:test`
* lint: `npm run be:lint`

For the first setup you can find demo data in /backend/prisma/demo-data.sql

# Frontend

* **development**: `npm run fe:watch`
* clean: `npm run fe:clean`
* build: `npm run fe:build`
* test: `npm run fe:test`
* lint: `npm run fe:lint`

---

# Generate Frontend Service's

*We use [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen#ng-openapi-gen-an-openapi-3-code-generator-for-angular) to
generator service code for Angular*

* generate: `npm run fe:gen-service`

---

# Identity provider Auth0

In this project, Auth0 is used as Identity Provider. Click on this [link](https://auth0.com/docs/quickstart/spa/angular/01-login)
to see how quick and easy you can use Auth0 in your project.

When you have finished all configurations on Auth0, edit the dotenv file (.env) in the frontend project and enter all the necessary data:

```dotenv
API_URL=http://localhost:3000
DOMAIN=DOMAIN
CLIENT_ID=CLIENT_ID
AUDIENCE=AUDIENCE
IS_PRODUCTION=false/true
```

To complete the configuration, then run the following command

```bash
  npm run config
```

In the backend project edit the dotenv file (.env) in the frontend project and enter all the necessary data:

```dotenv
APP_RUN_PORT=3000
DATABASE_URL=mysql://root:dev@localhost:3306/ngx_snake
DOMAIN=DOMAIN
CLIENT_ID=CLIENT_ID
AUDIENCE=AUDIENCE
``` 

---

## FAQ

#### I can't sign in / user is undefined

* remove all `process.env` references in `backend/src/common/authentication.middleware.ts` and replace them with the original value from
  auth0

#### I have questions about this project

* Feel free to join our discord [community](https://discord.gg/dy3yQEC977) or join the twitch [stream](https://www.twitch.tv/webdave_de)

---

## DB Demo Data
* for the first setup you can find demo data in [./backend/prisma/demo-data.sql](./backend/prisma/demo-data.sql)
* just import this script with your DB client


## URLs
* Backend Swagger: [http://localhost:3000/api](http://localhost:3000/api)
* Frontend: [http://localhost:4200](http://localhost:4200)


## work with us.
- fork
- send a PR
