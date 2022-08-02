NgxSnake
=============================

This is a community project. Snake game.

<div style="text-align:center">
  <img src="demo.gif" />
</div>


# Techstack
- Angular
- NestJs, Prisma
- Swagger
- Rxjs

---

# Requirements

- Node
- Npm (version ^7.24.2)
- Npx
- Docker

---

# Installation/Development

1. Install all dependencies: 
```bash
npm run installer
```
2. Edit docker compose file in folder docker/{dev,local,test}
3. Edit dotnet (.env) file's in backend and frontend project
    1. See or better rename .env.template to .env
4. Start local db docker container:
```bash
npm run docker:local:up
```
5. Prepare database with prisma:
```bash
npm run be:prisma
```
6. (optional) use backend/prisma/demo-data.sql for mock entries
7. Auth0 is the default Identity Provider [See more](#identity-provider-Auth0)

---

# Generate Frontend Service's

*We use [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen#ng-openapi-gen-an-openapi-3-code-generator-for-angular) to
generator service code for Angular*

```bash
npm run fe:gen-service
```

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

In the backend project edit the dotenv file (.env) and enter all the necessary data:

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

* Remove all `process.env` references in `backend/src/common/authentication.middleware.ts` and replace them with the original value from
  auth0

#### I have questions about this project

* Feel free to join our discord [community](https://discord.gg/dy3yQEC977) or join the twitch [stream](https://www.twitch.tv/webdave_de)

---

## DB Demo Data
* For the first setup you can find demo data in [./backend/prisma/demo-data.sql](./backend/prisma/demo-data.sql)
* Just import this script with your DB client


## URLs
* Backend Swagger: [http://localhost:3000/api](http://localhost:3000/api)
* Frontend: [http://localhost:4200](http://localhost:4200)


## Work with us.
1. Fork
2. Make your changes 
3. Run the lint and format scripts for BE/FE 
4. Send a PR

---

# DEV Setup

Installation:
```bash
npm run installer
```
Clean all:
```bash
npm run clean
```
Build all:
```bash
npm run build
```
Test all:
```bash
npm run test
```
Lint all:
```bash
npm run lint
```

## Docker

Start local db docker container:
```bash
npm run docker:local:up
```
Stop local db docker container:
```bash
npm run docker:local:down
```
Start local db docker container for tests:
```bash
npm run docker:test:up
```
Stop local db docker container for tests:
```bash
npm run docker:test:down
```
Start dev stack (db, backend, frontend in docker):
```bash
npm run docker:dev:up
```
Stop dev stack (db, backend, frontend in docker):
```bash
npm run docker:dev:down
```


## Backend

First Start - generate prisma client and deploy migrations to DB: 
```bash
npm run be:prisma
```
Development/Start:
```bash
npm run be:watch
```
Clean:
```bash
npm run be:clean
```
Build:
```bash
npm run be:build
```
Test:
```bash
npm run be:test
```
Lint:
```bash
npm run be:lint
```
For the first setup you can find demo data in /backend/prisma/demo-data.sql

## Frontend

Development/Start:
```bash
npm run fe:watch
```
Clean:
```bash
npm run fe:clean
```
Build: 
```bash
npm run fe:build
```
Test:
```bash
npm run fe:test
```
Lint: 
```bash
npm run fe:lint
```
