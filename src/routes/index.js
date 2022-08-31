const express = require('express');

const userRouter = require('./meetup.routes');

const router = express.Router();

router.use('/meetups', userRouter);

module.exports = router;