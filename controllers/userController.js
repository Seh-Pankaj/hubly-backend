const User = require("../models/userModel.js");
const createToken = require("../utils/token.js");

const loginUser = async (req, res) => {
  const { email: userEmail, password } = req.body;
  try {
    const user = await User.login(userEmail.toLowerCase(), password);
    const jwToken = createToken(user._id);

    const { firstName, lastName, email, phone, _id } = user;
    res
      .status(200)
      .json({ jwToken, firstName, lastName, email, phone, userId: _id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { firstName, lastName, email, password, phone, role } = req.body;
  try {
    await User.signup(
      firstName,
      lastName,
      email.toLowerCase(),
      password,
      phone,
      role
    );
    res.status(200).json({ email, password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
