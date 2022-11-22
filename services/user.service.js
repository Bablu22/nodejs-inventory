const User = require("../models/User");

exports.signupUserService = async (data) => {
    const res = await User.create(data);
    return res;
};
exports.findUserByEmailService = async (email) => {
    const res = await User.findOne({ email });
    return res;
};







exports.getUserByIdService = async (id) => {
    const res = await User.findOne({ _id: id });
    return res;
};

exports.updateUserByIdService = async (id, data) => {
    const res = await User.updateOne({ _id: id }, data, {
        runValidators: true,
    });
    return res;
};
