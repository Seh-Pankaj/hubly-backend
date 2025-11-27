const express = require("express");
const ticketsRouter = require("./routes/tickets");
const connectDB = require("./db/connection");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/tickets", ticketsRouter);

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(PORT, () => {
  console.log(`Express app listening at ${PORT}`);
  connectDB();
});
