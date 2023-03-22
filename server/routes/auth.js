const router = require("express").Router();
const authController = require("../controllers/authControllers");
const auth = require('../middleware/auth');

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.get("/user",auth ,authController.getUser);

module.exports = router;
