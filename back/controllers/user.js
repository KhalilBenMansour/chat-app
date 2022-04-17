const User = require("../models/user");

const userSignUp = async (req, res) => {
  const { userName, password, photo = "" } = req.body;
  try {
    const createdUser = new User({ userName, password, photo: "" });
    if (!createdUser) {
      res.status(500).json({ message: "Something is wrong" });
    } else {
      createdUser.save();
      res.send(createdUser);
    }
  } catch (err) {
    res.json(err);
  }
};

const userLogin = async (req, res) => {
  const { userName, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ userName });

    if (!user) {
      res.status(400).json({ message: "The is no such user" });
    } else {
      if (user.password === password) {
        res.send(user);
      } else {
        res.status(401).json({ message: "Password is incorrect" });
      }
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = { userLogin, userSignUp };
