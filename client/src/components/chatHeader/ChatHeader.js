import "./chatHeader.scss";
import { AiOutlineClose } from "react-icons/ai";
const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="person">
        <div className="personPhoto">
          <img src="khalil.jpg" alt="khalil" className="photo" />
        </div>
        <div className="personInfo">
          <div className="name">name</div>
          <div className="status">connected il'ya 3 heure</div>
        </div>
      </div>
      <div className="option">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default ChatHeader;
