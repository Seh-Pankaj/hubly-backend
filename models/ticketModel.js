const { default: mongoose } = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    ticketId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      trim: true,
    },
    customerDetails: {
      name: String,
      phone: String,
      email: String,
    },
    status: {
      type: String,
      enum: ["Resolved", "Unresolved"],
      default: "Unresolved",
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    messages: [String],
  },
  { timestamps: true }
);

const Ticket = new mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
