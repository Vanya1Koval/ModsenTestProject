const express = require('express');
const validation = require('../middleware/userValidation');
const { signup } = require('../middleware/signup');
const router = express.Router();

router.post('/', validation(), signup);

module.exports = router;