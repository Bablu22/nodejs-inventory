const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a category name"],
            trim: true,
            unique: true,
            lowercase: true,
        },
        description: String,
        imageUrl: {
            type: String,
            validate: [validator.isURL, "Please provide a valid url"],
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;

