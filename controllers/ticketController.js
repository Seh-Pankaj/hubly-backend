const Ticket = require("../models/ticketModel");

const createTicket = async (req, res) => {
  const { name, email, phone } = req.body;

  const ticketNumber = `T-${new Date().getFullYear()}-${Math.floor(
    Math.random() * 100000
  )
    .toString()
    .padStart(5, "0")}`;

  try {
    const ticket = await Ticket.create({
      ticketId: ticketNumber,
      userId: "6929618df20e5969af03714d",
      customerDetails: {
        name: name,
        email: email,
        phone: phone,
      },
    });

    res.status(201).json({ ticketId: ticket.ticketId });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTickets = async (req, res) => {
  const { userId } = req.body;

  const tickets = await Ticket.find({ userId: userId });
  res.status(200).json({ tickets });
};

const addMessage = async (req, res) => {
  const { ticketId, message, sender } = req.body;

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { ticketId },
      { $push: { messages: { sender, message } } },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error pushing message:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createTicket, addMessage, getTickets };
