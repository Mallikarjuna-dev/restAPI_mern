const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "Get goals all" });
});

// app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`server started on port ${port}`))