import "./chatMenu.scss";

import ChatFriends from "../chatFriends/ChatFriends";
const ChatMenu = () => {
  return (
    <div className="chatMenu">
      <ChatFriends type="friends" />
    </div>
  );
};

export default ChatMenu;
