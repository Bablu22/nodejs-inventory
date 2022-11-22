const Stock = require("../models/Stock");

exports.createStockService = async (data) => {
    const product = await Stock.create(data);
    return product;
};

exports.getStockService = async (filters, queries) => {
    const products = await Stock.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.feilds)
        .sort(queries.sortBy);
    // const products = await Product.where("name")
    //     .equals(/\w/)
    //     .where("quantity")
    //     .gte(100)
    //     .lt(600)
    //     .limit(2)
    //     .sort({ quantity: -1 });

    const totalProduct = await Stock.countDocuments(filters);
    const pageCount = Math.ceil(totalProduct / queries.limit);
    return { totalProduct, pageCount, products };
};

exports.getStockByIdService = async (id) => {
    const res = await Stock.findOne({ _id: id })
        .populate("store.id")
        .populate("suppliedBy")
        .populate("brand.id");
    return res;
};

exports.updateStockService = async (productId, data) => {
    const res = await Stock.updateOne({ _id: productId }, data, {
        runValidators: true,
    });
    return res;
};

// exports.updateBulkProductService = async (data) => {
//     // const res = await Product.updateMany({ _id: data.ids }, data.data, {
//     //     runValidators: true
//     // })

//     // Update arrya of product

//     const products = [];

//     data.ids.forEach((product) => {
//         products.push(Stock.updateOne({ _id: product.id }, product.data));
//     });

//     const res = await Promise.all(products);

//     return res;
// };

// exports.deleteProductService = async (id) => {
//     const res = await Stock.deleteOne({ _id: id });
//     return res;
// };

// exports.deleteBulkProductService = async (data) => {
//     const res = Stock.deleteMany({ _id: data.ids });

//     return res;
// };
