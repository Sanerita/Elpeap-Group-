const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the build folder
// app.use(express.static(path.join(__dirname, "build")));

// Serve index.html for all routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });