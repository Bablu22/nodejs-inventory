const router = require("express").Router();
const {
    createCategory,
    getCategory,
} = require("../controllers/category.controller");

router.route("/").post(createCategory).get(getCategory);

module.exports = router;
