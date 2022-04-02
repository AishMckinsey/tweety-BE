## Process steps followed:

### 1. Create Heath Router

### 2. Create Other endpoints

- Read the problem statement
- Think of the possible endpoints
- make the endpoints from index -> routes -> handlers -> services
- you can create the services after you create the database

### 3. Create the database

```
npm install pg pg-hstore
npm install sequelize
npm install sequelize-cli
```

1. To connect to database

```
npx sequelize-cli init
```

This will create models, migration and config/config.json

2. Create a .env file

```
DB_USERNAME=
DB_PASSWORD=
DB_PORT=
DB_HOST=
DB_NAME=
```

- convert config.json -> config.js
- add

```
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    .... process.env.DB_USERNAME ....
    .... process.env.DB_HOST ....
    .... process.env.DB_PASSWORD ....
}
```

- change also in index.js
- execute the following command to create database

```
npx sequelize-cli db:create
```

3. To create table

```
npx sequelize-cli model:generate --name Names --attributes attr1:dataType,attr2:dataType
```

```
npx sequelize-cli db:migrate
```

4. To add or drop extra columns

```
npx sequelize-cli migration:create --name update-user

to do --> npx sequelize-cli db:migrate
to undo --> npx sequelize-cli db:migrate:undo
```
