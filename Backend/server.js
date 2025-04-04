const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Business Website API!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});