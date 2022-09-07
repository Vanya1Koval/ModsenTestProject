'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        username: 'Admin1',
        is_admin: true,
        password: bcrypt.hashSync('Admin1', salt),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'Admin2',
        is_admin: true,
        password: bcrypt.hashSync('Admin2', salt),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'User1',
        is_admin: false,
        password: bcrypt.hashSync('User1', salt),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        username: 'User2',
        is_admin: false,
        password: bcrypt.hashSync('User2', salt),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
