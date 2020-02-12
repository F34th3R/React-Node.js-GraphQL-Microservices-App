# React / Node.js / GraphQL-Microservices // App

> ...In Progress 🚧💃🏼

## Install
### In the main directory
```bash
$ docker-compose up
```

### in a separate terminal, inside `listings-service` and `users-service`
```bash
$ yarn
$ yarn watch
```

## Don't forget
## To migrate the tables...
```bash
$ docker ps
$ docker exec -it ['container ID'] bash

$ yarn db:migrate
```