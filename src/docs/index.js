const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const meetups = require('./meetups');
const signup = require('./auth');
const other = require('./other');
const all = {};
all.paths = { ...meetups.paths, ...signup.paths, ...other.paths }
module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...all
};