const router = require("express").Router();
const {
    createStock,
    getStocks,
    getStockById
} = require("../controllers/stock.controller");

// router.route("/bulk-update").patch(updateBulkProduct);
// router.route("/bulk-delete").delete(deleteBulkProduct);

router.route("/").get(getStocks).post(createStock);

router.route("/:id").get(getStockById)

module.exports = router;
