const {
    createBrandService,
    getBrandService,
    getBrandByIdService,
    updateBrandByIdService,
} = require("../services/brand.service");

exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body);
        res.status(200).json({ message: "Brand created success" });
    } catch (error) {
        next(error);
    }
};

exports.getBrand = async (req, res, next) => {
    try {
        const result = await getBrandService();
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};

exports.getBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getBrandByIdService(id);
        if (!result) {
            res.status(200).json({ message: "Brand not found" });
        }
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};
exports.updateBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateBrandByIdService(id, req.body);
        if (!result.nModified) {
            res.status(200).json({ message: "Brand update faild" });
        }
        res.status(200).json({ message: "Update Success" });
    } catch (error) {
        next(error);
    }
};
