import "./chatMenu.scss";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import ChatList from "../chatList/ChatList";
const ChatMenu = () => {
  return (
    <div className="chatMenu">
      <header className="chat-header">
        <div className="chat-left">
          <h3 className="chat-title">Chats</h3>
        </div>
        <div className="chat-right">
          <div className="add-group">
            <AiOutlineUsergroupAdd />
          </div>
          <div className="add-friend">
            <CgAddR />
          </div>
        </div>
      </header>
      <section className="chat-body">
        <div>
          <input type="text" className="chat-search" />
        </div>
        <ChatList />
      </section>
    </div>
  );
};

export default ChatMenu;
