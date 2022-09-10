const express = require('express');
const jwt = require("jsonwebtoken");
const { verifyRefresh } = require("../middleware/checkToken");
const User = require('../db/models').User;

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, refreshToken } = req.body;
    const isValid = verifyRefresh(username, refreshToken);
    if (!isValid) {
        return res
        .status(401)
        .json({ success: false, error: "Invalid token,try login again" });
    }
    const accessToken = jwt.sign({ username: username }, "accessSecret", {
        expiresIn: "2m",
    });
    await User.update(
        {
          token: `${accessToken}`,
          updated_at: Date.now()
        },
        {
          where: { username: `${username}` },
        }
    );
    return res.status(200).json({ success: true, accessToken });
    });

    module.exports = router;