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
          <div className="chatMenu-button">
            <AiOutlineUsergroupAdd />
          </div>
          <div className="chatMenu-button">
            <CgAddR />
          </div>
        </div>
      </header>
      <section className="chat-body">
        <form className="search-form">
          <input
            type="text"
            placeholder="search chats ..."
            className="search-input"
          />
        </form>
        <ChatList />
      </section>
    </div>
  );
};

export default ChatMenu;
