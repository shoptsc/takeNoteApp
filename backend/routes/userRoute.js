const express = require("express");
const router = express.Router();


const { checkPassword, checkEmail } = require("../middlewares/userDetailsMatch")

const { registerUser, loginUser } = require("../controllers/userController");


router.route("/register").post(checkEmail, checkPassword, registerUser);
router.route("/login").post(checkEmail, checkPassword, loginUser);


module.exports = router