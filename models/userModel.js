const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Member"],
      default: "Member",
      required: true,
      trim: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

userSchema.statics.signup = async (
  firstName,
  lastName,
  email,
  password,
  phone,
  role
) => {
  const exists = await User.findOne({ email });
  if (exists) throw Error("Email Id already exists");
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);

  const user = User.create({
    firstName,
    lastName,
    email,
    password: hash,
    phone,
    role,
  });
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
