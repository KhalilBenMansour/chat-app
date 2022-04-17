const express = require("express");
const { userLogin } = require("../controllers/user.Js");
const { userSignUp } = require("../controllers/user.Js");
const router = express.Router();

router.post("/singup", userSignUp);
router.post("/login", userLogin);

module.exports = router;
