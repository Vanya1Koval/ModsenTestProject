const user = require('./user');
const members = require('./members');

module.exports = {
    paths: {
        '/users': {
            ...user
        },
        '/members/{id}': {
            ...members
        }
    }
}