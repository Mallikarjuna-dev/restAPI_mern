const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8080;

const app = express();

app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

app.listen(port, () => console.log(`server started on port ${port}`));
