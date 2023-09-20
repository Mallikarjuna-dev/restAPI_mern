const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected : ${db.connection.port}`);
  } catch (error) {
    console.log(`mongodb connection error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
