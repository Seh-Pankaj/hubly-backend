let chatbot = {
  headerColor: "#33475b",
  backgroundColor: "#eeeeee",
  introLineOne: "How can I help you?",
  introLineTwo: "Ask me anything!",
  welcomeMessage:
    "👋 Want to chat about Hubly? I'm a chatbot here to help you find your way.",
  missedChatTimer: "10:00",
};

const saveChatbot = async (req, res) => {
  try {
    chatbot = req.body;

    res.status(201).end();
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getChatbot = async (req, res) => {
  res.status(200).json(chatbot);
};

module.exports = { saveChatbot, getChatbot };
