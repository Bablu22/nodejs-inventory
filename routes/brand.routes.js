const router = require("express").Router();
const {
    createBrand,
    getBrand,
    getBrandById,
    updateBrandById
} = require("../controllers/brand.controller");

router.route("/").post(createBrand).get(getBrand);

router.route("/:id").get(getBrandById).patch(updateBrandById)
module.exports = router;
