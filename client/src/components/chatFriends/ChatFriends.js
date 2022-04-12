import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import ChatList from "../chatList/ChatList";
import "./chatFriends.scss";
const ChatFriends = ({ type }) => {
  return (
    <div className={type}>
      <header className={`${type}-header`}>
        <div className={`${type}-left`}>
          <h3 className={`${type}-title`}>{type}</h3>
        </div>
        <div className={`${type}-right`}>
          {type === "chats" ? (
            <>
              <div className={`${type}-button`}>
                <AiOutlineUsergroupAdd />
              </div>
              <div className={`${type}-button`}>
                <CgAddR />
              </div>
            </>
          ) : (
            <div className={`${type}-button`}>
              <AiOutlineUserAdd />
            </div>
          )}
        </div>
      </header>
      <section className={`${type}-body`}>
        <form className={`${type}-search-form`}>
          <input
            type="text"
            placeholder={`search ${type} ...`}
            className={`${type}-search-input`}
          />
        </form>
        <ChatList type={type} />
      </section>
    </div>
  );
};

export default ChatFriends;
