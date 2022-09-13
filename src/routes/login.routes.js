const express = require('express');
const { loginCheck } = require('../middleware/login.js');
const router = express.Router();

router.post('/', loginCheck)

module.exports = router;