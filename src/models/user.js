const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = model("user", userSchema);