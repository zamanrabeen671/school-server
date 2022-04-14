const router = require("express").Router();
const {
  register,
  login,
  getAllUsers,
  getAllTeachers,
  getUserById,
  banUserById,
  updateUserProfile,
} = require("../controller/authController.js");
const {
  validateRegister,
  validateLogin,
} = require("../helper/authValidation.js");
const verifyToken = require("../helper/verifyToken.js");

// register an user
router.post("/register", validateRegister, register);

// login user

router.post("/login", validateLogin, login);

// get all users

router.get("/allUser", getAllUsers);

// get all teachers == admin access only

router.get("/teachers", verifyToken, getAllTeachers);

router.get('/user/:id', verifyToken, getUserById)
router.delete('/banuser/:id', verifyToken, banUserById)
// update user profile data

router.patch("/update-user",verifyToken, updateUserProfile);

module.exports = router;
