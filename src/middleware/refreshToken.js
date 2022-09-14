const jwt = require("jsonwebtoken");
const { verifyRefresh } = require("../middleware/checkToken");
const User = require('../db/models').User;

const refreshToken = async (req, res) => {
    const { username, refreshToken } = req.body;
    const isValid = verifyRefresh(username, refreshToken);
    if (!isValid) {
        return res
            .status(401)
            .json({ success: false, error: "Invalid token,try login again" });
    }
    const accessToken = jwt.sign({ username }, "accessSecret", {
        expiresIn: "10m",
    });
    await User.update(
        {
            token: accessToken,
            updated_at: Date.now()
        },
        {
            where: { username },
        }
    );
    return res.status(200).json({ success: true, accessToken });
};

module.exports = { refreshToken }