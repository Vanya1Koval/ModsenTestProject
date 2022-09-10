const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const login = require('../middleware/auth.js');
const User = require('../db/models').User;

const router = express.Router();

router.post(
    '/',
    async (req, res, next) => {
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');

                        return next(error);
                    }

                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);
                            const token = jwt.sign({ username: user.username }, 'TOP_SECRET', {
                                expiresIn: "10m",
                            });
                            const refreshToken = jwt.sign({ username: user.username }, "refreshSecret");
                            const userUpdate = await User.update(
                                {
                                    token: `${token}`,
                                    updated_at: Date.now()
                                },
                                {
                                    where: { username: `${user.username}` },
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
    }
);

module.exports = router;