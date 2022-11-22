const Category = require("../models/Category");

exports.createCategoryService = async (data) => {
    const res = await Category.create(data);
    return res;
};
exports.getCategoryService = async (data) => {
    const res = await Category.find({});
    return res;
};
