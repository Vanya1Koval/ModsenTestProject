const express = require('express');
const passport = require('passport');
const validation = require('../middleware/userValidation');

const router = express.Router();

router.post(
    '/', validation(),
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
      res.json({
        message: 'Signup successful',
        user: req.user
      });
    }
  );

module.exports = router;