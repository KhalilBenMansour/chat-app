import "./chatInput.scss";
import { MdAddCircleOutline, MdSend } from "react-icons/md";
const ChatInput = () => {
  return (
    <div className="chatInput">
      <div className="add-div">
        <MdAddCircleOutline className="add-icon" />
      </div>
      <div className="input-div">
        <input type="text" className="input-field" />
      </div>
      <div className="send-div">
        <MdSend className="send-icon" />
      </div>
    </div>
  );
};

export default ChatInput;
