const {
    createCategoryService,
    getCategoryService,
} = require("../services/category.service");

exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        res.status(200).json({ message: "Category created success" });
    } catch (error) {
        next(error);
    }
};

exports.getCategory = async (req, res, next) => {
    try {
        const result = await getCategoryService();
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};
