const passport = require('passport');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
var User = require('../db/models').User;

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({username});
       console.log(user)

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        console.log('valid')
        const validate = await bcrypt.compareSync(password, user.password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        console.log(error)
        return done(error);
      }
    }
  )
);