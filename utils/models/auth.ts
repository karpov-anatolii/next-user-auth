import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please write your fullname"],
  },
  email: {
    type: String,
    required: [true, "please provide a valid email"],
    unique: true,
  },
  password: {
    type: String,
    // required: [true, "please provide a password"], // not required because Google provider doesn't provide password
  },
  image:{
    type: String,
  }
});

const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User