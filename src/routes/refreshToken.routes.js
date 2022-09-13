const express = require('express');
const { tokenRefresh } = require('../middleware/refreshToken.js');


const router = express.Router();

router.post("/", tokenRefresh)

module.exports = router;