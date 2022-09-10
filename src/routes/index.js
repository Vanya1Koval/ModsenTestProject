const express = require('express');

const meetupRouter = require('./meetup.routes');
const loginRouter = require('./login.routes');
const signupRouter = require('./signup.routes');
const refreshRouter = require('./refreshToken.routes');
const userRouter = require('./user.routes');

const router = express.Router();

router.use('/meetups', meetupRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/refresh', refreshRouter);
router.use('/users', userRouter);

module.exports = router;