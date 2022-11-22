const router = require("express").Router();
const {
    createSupplier,
    getSupplier,
    getSupplierById,
    updateSupplierById,
} = require("../controllers/supplier.controller");

router.route("/").post(createSupplier).get(getSupplier);

router.route("/:id").get(getSupplierById).patch(updateSupplierById);
module.exports = router;
