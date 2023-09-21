const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  myData,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", myData);

module.exports = router;
