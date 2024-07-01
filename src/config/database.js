module.exports = {
  "development": {
    "username": "postgres",
    "password": "admin1234",
    "database": "PENN-TEMPLATE",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  }
}
