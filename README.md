# NgxSnake
This is a community project.
Snake game.


## Techstack
- angular
- NestJs, Prisma
- Swagger
- rxjs


## Requirements
- node
- npm (version ^7.24.2)
- npx
- docker


## DEV Setup
* **INSTALL**: `npm run installer`
* clean all: `npm run clean`
* build all: `npm run build`
* test all: `npm run test`
* lint all: `npm run lint`

### docker
* **start local db docker container**: `npm run docker:local:up`
* stop local db docker container: `npm run docker:local:down`
* start local db docker container for tests: `npm run docker:test:up`
* stop local db docker container for tests: `npm run docker:test:down`
* start dev stack (db, backend, frontend in docker): `npm run docker:dev:up`
* stop dev stack (db, backend, frontend in docker): `npm run docker:dev:down`

### backend
* **first start - generate prisma client and deploy migrations to DB**: `npm run be:prisma`
* **development**: `npm run be:watch`
* clean: `npm run be:clean`
* build: `npm run be:build`
* test: `npm run be:test`
* lint: `npm run be:lint`

### frontend
* **development**: `npm run fe:watch`
* clean: `npm run fe:clean`
* build: `npm run fe:build`
* test: `npm run fe:test`
* lint: `npm run fe:lint`

### Generate Frontend Service's
* we use [ng-openapi-gen](https://github.com/cyclosproject/ng-openapi-gen#ng-openapi-gen-an-openapi-3-code-generator-for-angular) to generator service code for Angular
* generate: `npm run fe:gen-service`


## DB Demo Data
* for the first setup you can find demo data in [./backend/prisma/demo-data.sql](./backend/prisma/demo-data.sql)
* just import this script with your DB client


## URLs
* Backend Swagger: [http://localhost:3000/api](http://localhost:3000/api)
* Frontend: [http://localhost:4200](http://localhost:4200)


## work with us.
- fork
- send a PR
