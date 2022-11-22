const router = require("express").Router();
const {
    createProduct,
    getProducts,
    updateProduct,
    updateBulkProduct,
    deleteProductById,
    deleteBulkProduct,
} = require("../controllers/product.controller");
const authorizaton = require("../middlewares/authorizaton");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.use(isAuthenticated);
router.route("/bulk-update").patch(updateBulkProduct);
router.route("/bulk-delete").delete(deleteBulkProduct);

router
    .route("/")
    .get(getProducts)
    .post(authorizaton("admin", "store-manager"), createProduct);

router.route("/:id").patch(updateProduct).delete(deleteProductById);

module.exports = router;
