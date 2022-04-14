const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, unique: true },
  phone: { type: String, required: true },
  password: { type: String },
  role: {
    type: String,
    enum: ["student", "admin", "teacher"],
  },
  status: { type: String, default: "active" },
});

const Auth = mongoose.model("User", authSchema);

module.exports = Auth;
