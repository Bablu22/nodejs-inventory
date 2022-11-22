const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
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
        description: String,
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        manager: [
            {
                name: String,
                contactNumber: String,
                id: {
                    type: mongoose.Types.ObjectId,
                    ref: "User",
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
