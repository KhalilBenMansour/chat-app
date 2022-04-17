const express = require("express");
const messageController = require("../controllers/message");
const router = express.Router();

router.post("/create", messageController.createMessage);
router.get("/getall", messageController.getAllMessages);

module.exports = router;
