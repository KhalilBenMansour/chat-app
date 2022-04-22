const User = require("../models/user");
var jwt = require("jsonwebtoken");
const CryptoJs = require("crypto-js");

const signUp = async (req, res) => {
  try {
    // email unique
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(403).send("email already exist!");
    // crypt pass
    const createdUser = new User({
      ...req.body,
      password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC),
    });

    // save user
    await createdUser.save();
    res.status(201).send({ msg: "user added successfully", createdUser });
  } catch (e) {
    return res.status(500).json({ msg: "user sign up failed", e });
  }
};

const logIn = async (req, res) => {
  const { userName, password } = req.body;
  // require all fields
  if (!userName || !password) {
    return res.status(400).json({ msg: "enter all fields value" });
  }
  try {
    // username
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).send({ msg: "There is no such user" });
    }
    // password
    const hashedPass = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPass = hashedPass.toString(CryptoJs.enc.Utf8);
    if (originalPass !== password) {
      return res.status(401).send({ msg: "Wrong credentials!" });
    }
    // create token
    const payload = {
      id: user._id,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.PASS_TOKEN, {
      expiresIn: "3d",
    });

    res.status(201).send({ msg: "user login with success", token });
  } catch (e) {
    return res.status(500).json({ msg: "user login failed", e });
  }
};

module.exports = { signUp, logIn };
