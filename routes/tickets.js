const express = require("express");
const {
  createTicket,
  addMessage,
  getTickets,
} = require("../controllers/ticketController");
const { resolveTicket } = require("../controllers/teamsController");
const router = express.Router();

router.post("/create-ticket", createTicket);
router.post("/resolve-ticket", resolveTicket);
router.post("/get-tickets", getTickets);

router.post("/intro-message", addMessage);
router.post("/send-team-message", addMessage);

module.exports = router;
