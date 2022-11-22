const {
    createStoreService,
    getStoreService,
    getStoreByIdService,
} = require("../services/store.service");

exports.createStore = async (req, res, next) => {
    try {
        const result = await createStoreService(req.body);
        res.status(200).json({ message: "Store created success" });
    } catch (error) {
        next(error);
    }
};

exports.getStore = async (req, res, next) => {
    try {
        const result = await getStoreService();
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};

exports.getStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getStoreByIdService(id);
        if (!result) {
            res.status(200).json({ message: "Store not found" });
        }
        res.status(200).json({ message: "Success", result });
    } catch (error) {
        next(error);
    }
};
