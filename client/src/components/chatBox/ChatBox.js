import React from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatHeader from "../chatHeader/ChatHeader";
import ChatInput from "../chatInput/ChatInput";
import "./chatBox.scss";
const ChatBox = () => {
  return (
    <div className="chatBox">
      <ChatHeader />
      <ChatContent />
      <ChatInput />
    </div>
  );
};

export default ChatBox;
