const express = require('express');

const meetupRouter = require('./meetup.routes');
const loginRouter = require('./login.routes');

const router = express.Router();

router.use('/meetups', meetupRouter);
router.use('/login', loginRouter);

module.exports = router;