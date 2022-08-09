import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "There Must Be A Username"],
  },
  password: {
    type: String,
    required: [true, "Password Must Be Provided"],
    minLength: [8, "Password must be more than 8 characters"],
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
