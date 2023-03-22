const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, access denied" });
  }
  try {
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    //add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
