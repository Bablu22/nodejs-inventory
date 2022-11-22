const mongoose = require("mongoose");
const validator = require("validator");

const StockSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
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
                validate: [validator.isURL, "Please provide a valid image url"],
            },
        ],
        price: {
            type: String,
            required: true,
            min: [0, "Product price an't be negetive"],
        },
        quantity: {
            type: Number,
            required: true,
            min: [0, "Quantity can't be neative"],
            validator: {
                validate: (value) => {
                    const isInteger = Number.isInteger(value);
                    if (isInteger) {
                        return true;
                    } else {
                        return false;
                    }
                },
                message: "Quantity must be an number",
            },
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: ["in-stock", "out-of-stock", "discontinued"],
            },
            message: "Status can't be {value}",
        },
        store: {
            name: {
                type: String,
                required: [true, "Please provide a store name"],
                trim: true,
                lowercase: true,
                enum: {
                    values: [
                        "dhaka",
                        "barisal",
                        "chittagong",
                        "khulna",
                        "rajshahi",
                        "rangpur",
                        "sylhet",
                    ],
                    message: "{VALUE} is not a valid name",
                },
            },
            id: {
                type: mongoose.Types.ObjectId,
                ref: "Store",
                required: true,
            },
        },

        suppliedBy: {
            name: {
                type: String,
                required: [true, "Please provide a supplier name"],
                trim: true,
                lowercase: true,
            },
            id: {
                type: mongoose.Types.ObjectId,
                ref: "Supplier",
                required: true,
            },
        },

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
        sellCount: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Stock = mongoose.model("Stock", StockSchema);
module.exports = Stock;
