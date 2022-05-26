const User = require("../models/user");
const CryptoJs = require("crypto-js");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

const signUp = async (req, res) => {
  try {
    // userName unique
    // const newUser = await User.findOne({ userName: req.body.userName });
    // if (newUser) {
    //   return res
    //     .status(400)
    //     .json({ success: false, msg: "userName is already exist" });
    // }
    // email unique
    const user = await User.findOne({ email: req.body.email });
    if (user && user.verified) {
      return res.status(403).json({
        success: false,
        msg: "Entered email is already registred with us, Login to continue",
      });
    }
    if (user && !user.verified) {
      return res.status(400).json({
        success: false,
        msg: "Account created but need to activate, A link sent to your email to verify it",
      });
    }
    // crypt pass
    const createdUser = new User({
      ...req.body,
      password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC),
    });
    // send activation mail

    createdUser.confirmCode = crypto.randomBytes(20).toString("hex");
    // user.activeExpires = Date.now() + 24 * 3600 * 1000;
    // ${process.env.BASE_URL}/api/users
    const message = `http://localhost:3000/verify/${createdUser._id}/${createdUser.confirmCode}`;

    await sendEmail(req.body.email, "Verify email", message);
    console.log(createdUser);

    // save user
    await createdUser.save();
    res.status(201).send({
      success: true,
      msg: "user added successfully! Please check your email",
      createdUser,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, msg: "user sign up failed", e });
  }
};
const verifyUser = async (req, res) => {
  try {
    const user = await User.findOne({
      confirmCode: req.params.confirmCode,
    });

    if (!user) {
      return res.status(400).send({ success: false, msg: "User not found" });
    }
    let newUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { verified: true } },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, msg: "email verified with success", newUser });
  } catch (e) {
    res.status(500).json({ success: false, msg: "failed to verify user", e });
  }
};
const logIn = async (req, res) => {
  const { userName, password } = req.body;
  // require all fields
  if (!userName || !password) {
    return res
      .status(400)
      .send({ success: false, msg: "enter all fields value" });
  }
  try {
    // username
    const user = await User.findOne({ userName });
    if (!user) {
      return res
        .status(400)
        .send({ success: false, msg: "There is no such user" });
    }
    // password
    const hashedPass = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPass = hashedPass.toString(CryptoJs.enc.Utf8);
    if (originalPass !== password) {
      return res
        .status(401)
        .send({ success: false, msg: "Wrong credentials!" });
    }
    if (!user.verified) {
      return res.status(401).json({
        success: false,
        msg: "pending Account. Please verify your Email!",
      });
    }
    // create token
    const payload = {
      id: user._id,
      email: user.email,
      userName: user.userName,
    };
    const token = generateToken(payload);

    res
      .status(201)
      .send({ success: true, msg: "user login with success", token });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, msg: "user login failed", e });
  }
};

module.exports = { signUp, logIn, verifyUser };
