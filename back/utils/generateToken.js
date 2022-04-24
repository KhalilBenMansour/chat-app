var jwt = require("jsonwebtoken");
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.PASS_TOKEN, {
    expiresIn: "3d",
  });
};
module.exports = generateToken;
