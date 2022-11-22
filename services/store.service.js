const Store = require("../models/Store");

exports.createStoreService = async (data) => {
    const res = await Store.create(data);
    return res;
};
exports.getStoreService = async (data) => {
    const res = await Store.find({});
    return res;
};

exports.getStoreByIdService = async (id) => {
    const res = await Store.findOne({ _id: id });
    return res;
};
