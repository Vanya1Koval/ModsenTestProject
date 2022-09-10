const User = require('../db/models').User;

const getUserByToken = async (req, res) => {
    try {
        let token = req.get("authorization").split(' ');
        const user = await User.findOne( { where: { token: `${token[1]}`} });
        return res.json(user);
    } catch (error) {
        return res.status(401).json({ success: false, msg: error.message });
    }
};

module.exports = { getUserByToken };