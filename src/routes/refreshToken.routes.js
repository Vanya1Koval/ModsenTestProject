const express = require('express');
const { refreshToken } = require('../middleware/refreshToken.js');
const router = express.Router();

router.post("/", refreshToken)

module.exports = router;