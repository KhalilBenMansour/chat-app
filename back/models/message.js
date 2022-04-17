const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
  recieverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
