const express = require('express');
const { checkLogin } = require('../middleware/login.js');
const router = express.Router();

router.post('/', checkLogin)

module.exports = router;