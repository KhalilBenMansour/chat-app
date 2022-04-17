const mongoose = require("mongoose");

const MessageScheme = mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
  recieverId: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
  },
});

const Message = mongoose.model("message", MessageScheme);
module.exports = Message;
