const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`server started on port ${port}`));
