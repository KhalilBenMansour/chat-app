import "./chatList.scss";
import { msgDesc, friendDesc } from "../../dummy";

const ChatList = ({ type }) => {
  return (
    <div className={`${type}-list`}>
      <ul className={`${type}-list-list`}>
        {type === "chats"
          ? msgDesc.map((e) => (
              <li key={e.id} className={`${type}-list-item`}>
                <figure className={`${type}-figure`}>
                  <img
                    src="./khalil.jpg"
                    alt="friend-img"
                    className={`${type}-img`}
                  />
                </figure>
                <div className={`${type}-desc`}>
                  <div className={`${type}-left`}>
                    <h5 className={`${type}-name`}>{e.sender}</h5>
                    <p className={`${type}-text`}>
                      {e.lastMsg} <small>{e.timeAgo}</small>
                    </p>
                  </div>
                  <div className={`${type}-right`}>
                    <div className={`${type}-msg-num`}>{e.numUnreadMsg}</div>
                  </div>
                </div>
              </li>
            ))
          : friendDesc.map((e) => (
              <li key={e.id} className={`${type}-list-item`}>
                <figure className={`${type}-figure`}>
                  <img
                    src="./khalil.jpg"
                    alt="friend-img"
                    className={`${type}-img`}
                  />
                </figure>
                <div className={`${type}-desc`}>
                  <div className={`${type}-left`}>
                    <h5 className={`${type}-name`}>{e.friend}</h5>
                    <p className={`${type}-text`}>{e.desc}</p>
                  </div>
                  <div className={`${type}-right`}>
                    <div className={`${type}-msg-num`}>...</div>
                  </div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ChatList;
