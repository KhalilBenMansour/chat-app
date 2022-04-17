const User = require("../models/user");

const signUp = async (req, res) => {
  const createdUser = new User({ ...req.body });
  if (!createdUser) {
    return res.status(500).send({ message: "Something is wrong" });
  }
  try {
    createdUser.save();
    res.status(201).json({ msg: "user added" });
  } catch (e) {
    res.status(400).json({ msg: "failed", e });
  }
};

const logIn = async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  console.log(user);
  if (!user) {
    res.status(400).send({ message: "There is no such user" });
  }

  if (user.password !== password) {
    res.status(401).send({ message: "Password is incorrect" });
  }
  res.send(user);
};

module.exports = { signUp, logIn };
