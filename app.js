const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectWithDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const courseRouter = require("./routes/courseRoutes");
const enrollRouter = require("./routes/enrollRoutes");
const mcqRouter = require("./routes/mcqRoutes");
const examRouter = require("./routes/examRoutes");
const app = express();

// initiate dotenv
dotenv.config();
// initializa port
const port = process.env.PORT || 8002;
// connect dB
connectWithDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// register route

app.use("/auth", authRoutes);
app.use("/course", courseRouter);
app.use("/enroll", enrollRouter);
app.use("/mcq", mcqRouter);
app.use("/exam", examRouter);

app.use(function (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    status: "Failed",
  });
});

// root route handler

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
