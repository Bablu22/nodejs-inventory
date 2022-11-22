const {
    createProductService,
    getProductsService,
    updateProductService,
    updateBulkProductService,
    deleteProductService,
    deleteBulkProductService,
} = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
    try {
        const product = await createProductService(req.body);
        res.status(200).json({ message: "Product inserted success", product });
    } catch (error) {
        next(error);
    }
};

exports.getProducts = async (req, res, next) => {
    try {
        // Filtering
        let filters = { ...req.query };
        const excludeFeilds = ["sort", "page", "limit"];
        excludeFeilds.forEach((feild) => delete filters[feild]);

        let filterString = JSON.stringify(filters)
        filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filterString)
        console.log(filters);
        // sorting
        const queries = {};
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }
        if (req.query.feilds) {
            const feilds = req.query.feilds.split(",").join(" ");
            queries.feilds = feilds;
        }

        // Pagination
        if (req.query.page) {
            const { page = 0, limit = 10 } = req.query
            const skip = (page - 1) * parseInt(limit)
            queries.skip = skip
            queries.limit = parseInt(limit)
        }

        const products = await getProductsService(filters, queries);
        res.status(200).json({ message: "success", products });
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await updateProductService(id, req.body);
        res.status(200).json({ message: "success", products });
    } catch (error) {
        next(error);
    }
};

exports.updateBulkProduct = async (req, res, next) => {
    try {
        const result = await updateBulkProductService(req.body);
        res.status(200).json({ message: "success", result });
    } catch (error) {
        next(error);
    }
};

exports.deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await deleteProductService(id, req.body);
        if (products.deletedCount === 0) {
            res.status(200).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Delete success", products });
    } catch (error) {
        next(error);
    }
};

exports.deleteBulkProduct = async (req, res, next) => {
    try {
        const result = await deleteBulkProductService(req.body);
        if (result.deletedCount === 0) {
            res.status(200).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "success", result });
    } catch (error) {
        next(error);
    }
};
