const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authUser = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: "Auth Token is Required!" });

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(id).select("_id");

    if (!user) {
      return res
        .status(401)
        .json({ error: "User not found, request unauthorized!" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Request is not authorized!" });
  }
};

module.exports = authUser;
