import "./chatInput.scss";
import { MdAddCircleOutline, MdSend } from "react-icons/md";
import { useState } from "react";

const ChatInput = ({ socket }) => {
  const [msg, setmsg] = useState("");

  const handleChange = (e) => {
    setmsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg) {
      return;
    }
    socket.emit("message", { message: msg });
    setmsg("");
  };

  return (
    <form className="chatInput" onSubmit={handleSubmit}>
      <button className="add-div">
        <MdAddCircleOutline className="add-icon" />
      </button>
      <div className="input-div">
        <input
          type="text"
          className="input-field"
          value={msg}
          onChange={handleChange}
        />
      </div>
      <button className="send-div">
        <MdSend className="send-icon" />
      </button>
    </form>
  );
};

export default ChatInput;
