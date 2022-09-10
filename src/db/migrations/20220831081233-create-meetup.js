'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meetups', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      tags: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      date: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE
      },
      place: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      creatorId: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      membersId: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.JSON
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
    return queryInterface.dropTable('meetups');
  }
};

