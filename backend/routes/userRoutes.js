const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  myData,
} = require("../controllers/userController");
const { protect } = require("../midleware/authMiddleware")

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, myData);

module.exports = router;
