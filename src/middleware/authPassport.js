const passport = require('passport');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const localStrategy = require('passport-local').Strategy;
var User = require('../db/models').User;
const salt = bcrypt.genSaltSync(10);

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const userExists = await User.findOne({ where: { username } });
        if (userExists) {
          return done(null, false);
        }
        const id = uuidv4();
        const is_admin = false;
        password = bcrypt.hashSync(password, salt);
        const created_at = new Date();
        const updated_at = new Date();
        const user = await User.create({ id, username, is_admin, password, created_at, updated_at });
        return done(null,{ message: 'Signup in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
          return done(null, false);
        }
        const validate = bcrypt.compareSync(password, user.password);
        if (!validate) {
          return done(null, false);
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);