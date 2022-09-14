const passport = require('passport');
const login = require('../middleware/authPassport.js');
const jwt = require('jsonwebtoken');
const User = require('../db/models').User;
const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

const checkLogin = async (req, res, next) => {
    passport.authenticate(
        'login',
        async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('An error occurred.');
                    return next(error), res.json('Wrong username or/and password ');
                }

                req.login(
                    user,
                    { session: false },
                    async (error) => {
                        if (error) return next(error);
                        const { username } = user;
                        const token = jwt.sign({ username }, JWT_SECRET, {
                            expiresIn: "10m",
                        });
                        const refreshToken = jwt.sign({ username }, JWT_REFRESH_SECRET);
                        await User.update(
                            {
                                token,
                                updated_at: Date.now()
                            },
                            {
                                where: { username },
                            }
                        );

                        return res.json({ token, refreshToken });
                    }
                );
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next);
};

module.exports = { checkLogin }