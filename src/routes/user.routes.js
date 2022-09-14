const express = require('express');
const { isAuthenticated } = require('../middleware/checkToken');
const { getUserByToken } = require('../middleware/getUserByToken');
const router = express.Router();

router.get('/', isAuthenticated, getUserByToken);

module.exports = router;