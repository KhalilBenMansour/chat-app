const express = require("express");
const { signUp, logIn } = require("../controllers/user");
const { userValidate } = require("../middelwares/userValidate");
const { auth } = require("../middelwares/auth");
const router = express.Router();

router.post("/signup", userValidate, signUp);
router.post("/login", logIn);
router.get("/currentuser", auth, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;
