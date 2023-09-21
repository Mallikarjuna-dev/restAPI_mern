const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: ["true", "please add a name"],
    },
    email: {
      type: "string",
      required: ["true", "please add a email"],
      unique: true,
    },
    password: {
      type: "string",
      required: ["true", "please add a password"],
    },
    phone: {
      type: "number",
      required: ["true", "please add a phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);