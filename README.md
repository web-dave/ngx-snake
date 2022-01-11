# NgxSnake

This is a community project.
Snake game.


## Techstack
- angular
- NestJs, Prisma
- rxjs


## Requirements
- node
- npm
- docker


## DEV Setup
* **INSTALL**: `npm run installer`
* clean all: `npm run clean` // tut grad nicht weil er komischerweise rimraf im root sucht
* build all: `npm run build`
* test all: `npm run test`
* lint all: `npm run lint`

### docker
* start local db docker container: `npm run docker:local:up`
* stop local db docker container: `npm run docker:local:down`
* start local db docker container for tests: `npm run docker:test:up`
* stop local db docker container for tests: `npm run docker:test:down`
* start dev stack (db, backend, frontend in docker): `npm run docker:dev:up`
* stop dev stack (db, backend, frontend in docker): `npm run docker:dev:down`

### backend
* development: `npm run be:watch`
* clean: `npm run be:clean`
* build: `npm run be:build`
* test: `npm run be:test`
* lint: `npm run be:lint`

For the first setup you can find demo data in /backend/prisma/demo-data.sql 

### frontend
* development: `npm run fe:watch`
* clean: `npm run fe:clean`
* build: `npm run fe:build`
* test: `npm run fe:test`
* lint: `npm run fe:lint`


## work with us.
- fork
- send a PR
