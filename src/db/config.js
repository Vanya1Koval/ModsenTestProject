require('dotenv').config();

const sslOptions = {
    ssl: {
        sslmode: 'require',
        rejectUnauthorized: false
    }
}

module.exports = {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: process.env.DATABASE_LOGGING_ENABLED === 'true' ? console.log : false,
    pool: {
        max: 50
    },
    dialectOptions: process.env.DATABASE_SSL_ENABLED === 'true' ? sslOptions : {}
}