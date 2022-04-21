const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const token = bearerHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.PASS_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ msg: "Invalid Token", err });
  }
};
