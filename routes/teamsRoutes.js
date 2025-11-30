const express = require("express");
const {
  getTeamMates,
  transferTicket,
} = require("../controllers/teamsController");

const router = express.Router();

router.get("/get-team-mates", getTeamMates);
router.post("/transfer-ticket", transferTicket);

module.exports = router;
