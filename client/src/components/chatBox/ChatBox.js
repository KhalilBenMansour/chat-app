import React, { useState } from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatHeader from "../chatHeader/ChatHeader";
import ChatInput from "../chatInput/ChatInput";
import "./chatBox.scss";
import { users, msgs } from "../../dummy";
const ChatBox = () => {
  const [msges, setmsges] = useState(msgs);
  const sendMsg = (msg) => {
    setmsges([
      ...msges,
      { msgId: msges.length + 1, text: msg, userId: 1, currentUser: true },
    ]);
  };
  return (
    <div className="chatBox">
      <ChatHeader />
      <ChatContent msges={msges} />
      <ChatInput sendMsg={sendMsg} />
    </div>
  );
};

export default ChatBox;
