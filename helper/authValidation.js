const Joi = require("joi");

const validateRegister = (req, res, next) => {
  const data = req.body;

  // defined joi validation schema
  const schema = Joi.object({
    username: Joi.string(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().min(6),
    role: Joi.string().required().valid("student", "teacher", "admin"),
    status: Joi.string().valid("active", "inactive"),
  });

  const { error } = schema.validate(data);

  if (error) {
    const message = error.details[0].message;
    return res.status(400).json({
      message,
      status: "failed",
    });
  }
  // call next
  next();
};

// validate login

const validateLogin = (req, res, next) => {
  const data = req.body;

  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(data);

  if (error) {
    const message = error.details[0].message;
    return res.status(400).json({ message: message, status: "failed" });
  }
  next();
};

module.exports = { validateRegister, validateLogin };
