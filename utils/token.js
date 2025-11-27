const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const createToken = (id) => jwt.sign({ id }, SECRET, { expiresIn: "1d" });

module.exports = createToken;
