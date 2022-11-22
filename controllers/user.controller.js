const User = require("../models/User");
const {
    signupUserService,
    findUserByEmailService,
} = require("../services/user.service");
const { geterateToken } = require("../utils/token");

exports.signUp = async (req, res, next) => {
    try {
        const result = await signupUserService(req.body);
        res.status(200).json({ message: "User created success" });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(401).json({ message: "Please provide your credentials" });
        }

        const user = await findUserByEmailService(email);
        if (!user) {
            res.status(401).json({ message: "User not found" });
        }

        const isPasswordValid = user.comparePassword(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Password is incorrect" });
        }
        if (user.status != "active") {
            res.status(401).json({ message: "Your account is not activated" });
        }
        const token = geterateToken(user);

        res.status(200).json({ message: "User loggedin success", user, token });
    } catch (error) {
        next(error);
    }
};

exports.getMe = async (req, res, next) => {
    try {
        const user = await findUserByEmailService(req.user.email);
        res.status(200).json({ message: "success", user });
    } catch (error) {
        next(error);
    }
};
