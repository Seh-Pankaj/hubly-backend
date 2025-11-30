const express = require("express");
const {
  loginUser,
  signupUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

// LOGIN
router.post("/login", loginUser);

// SIGNUP
router.post("/signup", signupUser);

router.post("/delete-user", deleteUser);

module.exports = router;
