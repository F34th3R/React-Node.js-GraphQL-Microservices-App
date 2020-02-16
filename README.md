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

PORTS:
- API-gateway
  - http://localhost:7000/graphql

    Query
    ```
    {
      listings {
        id
        title
        description
      }
    }
    ```

    Mutation
    ```
    mutation {
      createUser(email: "test02@mail.com", password: "secret"){
        id
        email
      }
    }
    ```
- UsersService
  - [POST] localhost:7101/users
    body raw json
    ```
    {
      "email": "test1@mail.com",
      "password": "secret"
    }
    ```
- ListingsService
  - [GET] http://localhost:7100/listings


## Access into container bash
### To migrate the tables...
```bash
$ docker ps
$ docker exec -it ['container ID'] bash

$ yarn db:migrate
```