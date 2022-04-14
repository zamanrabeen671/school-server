const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectWithDB = () => {
  const uri = process.env.DB_URI;

  mongoose
    .connect(uri)
    .then(() => console.log("connected to DB"))
    .catch((e) => console.log(e.message));
};

module.exports = connectWithDB;
