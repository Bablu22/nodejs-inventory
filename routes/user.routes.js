const router = require("express").Router();
const { signUp, login, getMe } = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.route("/signup").post(signUp)
router.route("/login").post(login)
router.route("/me").get(isAuthenticated, getMe)

module.exports = router;
