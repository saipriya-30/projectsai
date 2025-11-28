// app.js
const express = require("express");
const app = express();

app.use(express.json());

// GET endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// POST endpoint
app.post("/user", (req, res) => {
  const user = req.body;
  res.json({ received: user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

