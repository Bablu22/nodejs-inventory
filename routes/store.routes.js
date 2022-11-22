const router = require("express").Router();
const {
    createStore,
    getStore,
    getStoreById,
} = require("../controllers/store.controller");

router.route("/").post(createStore).get(getStore);

router.route("/:id").get(getStoreById);
module.exports = router;
