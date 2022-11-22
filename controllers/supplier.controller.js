const {
    createSupplierService,
    getSupplierService,
    getSupplierByIdService,
    updateSupplierByIdService
} = require("../services/supplier.service");

exports.createSupplier = async (req, res, next) => {
    try {
        const result = await createSupplierService(req.body);
        res.status(200).json({ message: "Supplier created success" });
    } catch (error) {
        next(error);
    }
};

exports.getSupplier = async (req, res, next) => {
    try {
        const result = await getSupplierService();
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};

exports.getSupplierById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getSupplierByIdService(id);
        if (!result) {
            res.status(200).json({ message: "Supplier not found" });
        }
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};
exports.updateSupplierById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateSupplierByIdService(id, req.body);
        if (!result.nModified) {
            res.status(200).json({ message: "Supplier update faild" });
        }
        res.status(200).json({ message: "Update Success" });
    } catch (error) {
        next(error);
    }
};


