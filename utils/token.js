const jwt = require("jsonwebtoken")

exports.geterateToken = (userData) => {
    const payload = {
        email: userData.email,
        role: userData.role
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" })
    return token
}
