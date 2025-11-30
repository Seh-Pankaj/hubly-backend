const Ticket = require("../models/ticketModel");
const User = require("../models/userModel");

const getTeamMates = async (req, res) => {
  const users = await User.find();
  if (!users) res.status(500).json({ error: "No Team Members" });
  res.status(200).json({ users });
};

const transferTicket = async (req, res) => {
  const { ticketId, userId } = req.body;

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { ticketId },
      { userId },
      { new: true }
    );
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error transfer message:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const resolveTicket = async (req, res) => {
  const { ticketId } = req.body;

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { ticketId },
      { status: "Resolved" },
      { new: true }
    );
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error resolving message:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getTeamMates, transferTicket, resolveTicket };
