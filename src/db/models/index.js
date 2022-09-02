require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const db = {};

const sslOptions = {
  ssl: {
    sslmode: 'require',
    rejectUnauthorized: false
  }
};

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: process.env.DATABASE_LOGGING_ENABLED === 'true' ? console.log : false,
  dialect: 'postgres',
  dialectOptions: process.env.DATABASE_SSL_ENABLED === 'true' ? sslOptions : {},
  seederStorage: 'sequelize',
  pool: {
    max: 50,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscored: true
  }
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    const modelName = model.name.charAt(0).toUpperCase() + model.name.slice(1);
    db[modelName] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;