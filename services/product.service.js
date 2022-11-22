const Product = require("../models/Product");
const Brand = require("../models/Brand")

exports.createProductService = async (data) => {
    const product = await Product.create(data);
    const { _id: productId, brand } = product

    await Brand.updateOne({ _id: brand.id }, { $push: { products: productId } })

    return product;
};

exports.getProductsService = async (filters, queries) => {
    const products = await Product.find(filters)
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

    const totalProduct = await Product.countDocuments(filters)
    const pageCount = Math.ceil(totalProduct / queries.limit)
    return { totalProduct, pageCount, products };
};

exports.updateProductService = async (productId, data) => {
    const res = await Product.updateOne({ _id: productId }, data, {
        runValidators: true,
    });
    return res;
};

exports.updateBulkProductService = async (data) => {
    // const res = await Product.updateMany({ _id: data.ids }, data.data, {
    //     runValidators: true
    // })

    // Update arrya of product

    const products = [];

    data.ids.forEach((product) => {
        products.push(Product.updateOne({ _id: product.id }, product.data));
    });

    const res = await Promise.all(products);

    return res;
};

exports.deleteProductService = async (id) => {
    const res = await Product.deleteOne({ _id: id });
    return res;
};

exports.deleteBulkProductService = async (data) => {
    const res = Product.deleteMany({ _id: data.ids });

    return res;
};
