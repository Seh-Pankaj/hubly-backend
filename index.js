const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(PORT, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
