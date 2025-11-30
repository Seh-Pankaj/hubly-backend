const express = require("express");
const accessController = require("../controllers/accessController");
const router = express.Router();

// Only to validate jwt token
router.get("/", accessController);

module.exports = router;
