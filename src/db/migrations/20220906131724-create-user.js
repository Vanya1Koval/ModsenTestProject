'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      is_admin: {
        allowNull: false,
        defaultValue: null,
        type: Sequelize.BOOLEAN
      },
      token: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        defaultValue: null,
        type: Sequelize.STRING
      },

      created_at: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
 
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};