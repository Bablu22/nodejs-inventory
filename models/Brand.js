const mongoose = require("mongoose");
const validator = require("validator");

const brandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a brnad name"],
            trim: true,
            maxLength: 100,
            unique: true,
            lowercase: true,
        },
        description: String,
        email: {
            type: String,
            validate: [validator.isEmail, "Please provide a valid email"],
            lowercase: true,
        },
        website: {
            type: String,
            validate: [validator.isURL, "Please provide a valid url"],
        },
        location: String,
        products: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
        ],
        supplier: [
            {
                name: String,
                contactNumber: String,
                id: {
                    type: mongoose.Types.ObjectId,
                    ref: "Supplier",
                },
            },
        ],
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    {
        timestamps: true,
    },
);

const Brand = mongoose.model("Brand", brandSchema)
module.exports = Brand
