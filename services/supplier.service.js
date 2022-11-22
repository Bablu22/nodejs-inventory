const Supplier = require("../models/Supplier");

exports.createSupplierService = async (data) => {
    const res = await Supplier.create(data);
    return res;
};
exports.getSupplierService = async (data) => {
    const res = await Supplier.find({}).populate("products");
    return res;
};

exports.getSupplierByIdService = async (id) => {
    const res = await Supplier.findOne({ _id: id }).populate("products");
    return res;
};

exports.updateSupplierByIdService = async (id, data) => {
    const res = await Supplier.updateOne({ _id: id }, data, {
        runValidators: true,
    });
    return res;
};
