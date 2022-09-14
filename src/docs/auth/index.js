const signup = require('./signup');
const login = require('./login');
const refresh = require('./refreshToken')

module.exports = {
    paths: {
        '/signup': {
            ...signup
        },
        '/login': {
            ...login
        },
        '/refresh': {
            ...refresh
        },
    }
}