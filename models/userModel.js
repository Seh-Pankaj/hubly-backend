const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    role: {
      type: "Admin" | "Member",
      required: true,
      trim: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

userSchema.statics.signup = async (name, email, password) => {
  const exists = await User.findOne({ email });
  if (exists) throw Error("Email Id already exists");
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);

  const user = User.create({ name, email, password: hash });
  return user;
};

userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw Error("Unregistered Email");

  const passwordMatched = bcrypt.compareSync(password, user.password);

  if (!passwordMatched) throw Error("Incorrect Password");

  return user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
