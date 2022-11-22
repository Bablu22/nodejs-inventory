const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "You are not loggedin " });
        }
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        next(error);
    }
};
