const express = require("express");
const { errorHandler } = require("./midleware/errorMiddleware");
require("dotenv").config();
require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port: ${port}`));
