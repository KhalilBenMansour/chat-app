import React, { useEffect, useState } from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatHeader from "../chatHeader/ChatHeader";
import ChatInput from "../chatInput/ChatInput";
import "./chatBox.scss";
import { users, msgs } from "../../dummy";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
const ChatBox = () => {
  const [msges, setmsges] = useState(msgs);
  useEffect(() => {
    socket.on("message", (data) => {
      console.log("sender", data.socketId, "reciever", socket.id);
      setmsges([
        ...msges,
        {
          msgId: msges.length + 1,
          text: data.message,
          userId: data.socketId === socket.id ? data.userId : 2,
          currentUser:
            data.socketId === socket.id ? data.currentUser : !data.currentUser,
        },
      ]);
    });
  }, [msges]);

  return (
    <div className="chatBox">
      <ChatHeader />
      <ChatContent msges={msges} users={users} />
      <ChatInput socket={socket} />
    </div>
  );
};

export default ChatBox;
