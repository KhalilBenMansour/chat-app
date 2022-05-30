import "./chatHeader.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
const ChatHeader = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="chatHeader">
      <div className="person">
        <div className="personPhoto">
          <img src="khalil.jpg" alt="khalil" className="photo" />
        </div>
        <div className="personInfo">
          <div className="name">{user && user.userName}</div>
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
