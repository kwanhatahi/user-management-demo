# user-management-demo
a demo user management system using Angular for the frontend and NestJS for the backend.

- Setup the Postgres DB :
  - In the root path, please run
  ```
  ./setup.sh
  ```

### Note: To connect to the DB, the host is `localhost`

- Install the project's dependencies at the root path:

```
yarn
```

- Run migration script to create db schema

```
yarn core db:migration:run
```

- Build core and run seeding to mockup the data

```
yarn core ts:build
yarn core db:seed:dev
```

- Run start
```
yarn start:all
```