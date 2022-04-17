const Message = require("../models/message");

module.exports = {
  createMessage: async (req, res) => {
    const createdMessage = new Message(req.body);
    if (!createdMessage) {
      res.send({ msg: "there is no such message" });
    }
    try {
      await createdMessage.save();
      res.send(createdMessage);
    } catch (e) {
      res.send(e);
    }
  },
  getAllMessages: async (req, res) => {},
};
