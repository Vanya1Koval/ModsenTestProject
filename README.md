# Name of project

ModsenTestProject

## Local env requirements

- Node.js 16
- PostgreSQL 14

## Setup local

1. Create the database:

    ```
    psql postgres
    create user testuser with password '1234';
    alter user testuser with superuser;
    create database testdb with owner = testuser;
    grant all privileges on database testdb to testuser;
    alter user testuser createdb;
    exit
    ```

2. Install modules `npm install`
3. Create `.env` file based on `.env.example`
4. Run server `npm start`