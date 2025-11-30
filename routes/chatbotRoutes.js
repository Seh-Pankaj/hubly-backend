const express = require("express");
const { saveChatbot, getChatbot } = require("../controllers/chatbotController");
const router = express.Router();

router.post("/save-chatbot-settings", saveChatbot);

router.get("/get-chatbot-settings", getChatbot);

module.exports = router;
