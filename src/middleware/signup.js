const passport = require('passport');

const signup = (req, res, next) => {
    passport.authenticate(
        'signup',
        async (err, user) => {
            try {
                if (err || !user) {
                    const error = new Error('An error occurred.');

                    return next(error), res.json('User already exist');
                }
                    return res.json({ user })
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next);
}

module.exports = { signup }