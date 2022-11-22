const Brand = require("../models/Brand");

exports.createBrandService = async (data) => {
    const res = await Brand.create(data);
    return res;
};
exports.getBrandService = async (data) => {
    const res = await Brand.find({}).populate("products")
    return res;
};

exports.getBrandByIdService = async (id) => {
    const res = await Brand.findOne({ _id: id }).populate("products")
    return res;
};

exports.updateBrandByIdService = async (id, data) => {
    const res = await Brand.updateOne({ _id: id }, data, {
        runValidators: true,
    });
    return res;
};
