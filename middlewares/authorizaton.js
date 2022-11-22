module.exports = (...role) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (!role.includes(userRole)) {
            res
                .status(403)
                .json({ message: "You are not authorazes to access this" });
        }
        next();
    };
};
