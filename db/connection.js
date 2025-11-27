const mongoose = require("mongoose");

const USER = process.env.USER || "user";
const PASS = process.env.PASS || "pass";

const uri = `mongodb+srv://${USER}:${PASS}@maindb.savq0je.mongodb.net/Hubly`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connection to DB successful");
  } catch (error) {
    console.log("Connection to DB failed", error.errorResponse.errmsg);
  }
};

module.exports = connectDB;
