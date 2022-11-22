const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minLength: [3, "Name must be at least 3 charters"],
            maxLength: [100, "Name is too learge"],
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            required: true,
            enum: {
                values: ["kg", "litre", "pcs", "bag"],
                message: "Unit can't be {value}, must be mg/litre/pcs",
            },
        },
        imageUrls: [
            {
                type: String,
                required: true,
                validate: (value) => {
                    if (!Array.isArray(value)) {
                        return false;
                    }
                    let isValid = true;
                    value.forEach((url) => {
                        if (!validator.isURL(url)) {
                            isValid = false;
                        }
                    });
                },
                message: "Please provide a valid image url",
            },
        ],

        category: {
            type: String,
            required: true,
        },
        brand: {
            name: {
                type: String,
                required: true,
            },
            id: {
                type: mongoose.Types.ObjectId,
                ref: "Brand",
            },
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
