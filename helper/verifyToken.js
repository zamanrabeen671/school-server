const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "Access Denied",
      status: "Failed",
    });
  }

  try {
    const verified = jwt.verify(token, process.env.AUTH_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
      status: "Failed",
    });
  }
};

module.exports = verifyToken;
