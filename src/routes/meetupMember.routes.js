const express = require('express');
const { isAuthenticated } = require('../middleware/checkToken');
const { addMember } = require('../controllers/meetup.controller');
const router = express.Router();

router.put('/:meetupId', isAuthenticated, addMember);


module.exports = router;