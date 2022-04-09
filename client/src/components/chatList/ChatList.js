import "./chatList.scss";
const msgDesc = [
  {
    id: 1,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 2,
    sender: "oussema ben dahmen",
    lastMsg: "hi i am fine ",
    timeAgo: "2 days",
    numUnreadMsg: 2,
  },
  {
    id: 3,
    sender: "hichem lesmi",
    lastMsg: "hi",
    timeAgo: "2 weeks",
    numUnreadMsg: 1,
  },
  {
    id: 4,
    sender: "chiheb dridi",
    lastMsg: "how are your study...",
    timeAgo: "2 h",
    numUnreadMsg: 3,
  },
  {
    id: 5,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 6,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
];

const ChatList = () => {
  return (
    <div className="chat-list">
      <ul className="chat-list-list">
        {msgDesc.map((e) => (
          <li key={e.id} className="chat-list-item">
            <figure className="friend-figure">
              <img src="./khalil.jpg" alt="friend-img" className="friend-img" />
            </figure>
            <div className="msg-desc">
              <div className="left">
                <h5 className="friend-name">{e.sender}</h5>
                <p className="last-msg">
                  {e.lastMsg} <small>{e.timeAgo}</small>
                </p>
              </div>
              <div className="right">
                <div className="last-msg-num">{e.numUnreadMsg}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
