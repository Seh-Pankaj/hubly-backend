const express = require("express");
const Ticket = require("../models/ticketModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  const ticketNumber = `T-${new Date().getFullYear()}-${Math.floor(
    Math.random() * 100000
  ).padStart(5, "0")}`;

  const ticket = await Ticket.create({
    ticketId: ticketNumber,
    userId: adminUserId,
    customerDetails: {
      name: name,
      email: email,
      phone: phone,
    },
  });

  res.status(201).json({ ticket: ticket });
});

module.exports = router;
