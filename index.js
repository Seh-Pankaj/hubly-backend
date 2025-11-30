const express = require("express");
const cors = require("cors");
const ticketsRouter = require("./routes/tickets");
const userRouter = require("./routes/userRoutes");
const chatbotRouter = require("./routes/chatbotRoutes");
const teamsRouter = require("./routes/teamsRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const connectDB = require("./db/connection");
const authUser = require("./middleware/authMiddleware");
const app = express();

const PORT = process.env.PORT || 3000;
const REACT_ORIGIN = process.env.REACT_ORIGIN || "http://localhost:5122";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: REACT_ORIGIN }));

app.use("/api/user", userRouter);
app.use("/api", ticketsRouter);
app.use("/authorise", authUser, protectedRoutes);
app.use("/api", teamsRouter);
app.use("/api", chatbotRouter);

app.listen(PORT, () => {
  console.log(`Express app listening at ${PORT}`);
  connectDB();
});
