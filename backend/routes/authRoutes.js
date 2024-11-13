const express = require("express");
const { authController } = require("../controllers/authController");
const { requireSignIn } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register",authController.registerController);
router.post("/login",authController.signInController);
router.put("/logout",requireSignIn,authController.logoutController);


module.exports.authRoutes = router;