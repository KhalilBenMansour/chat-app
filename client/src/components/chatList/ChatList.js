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

  {
    id: 7,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 8,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 9,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 10,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 11,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 12,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
  {
    id: 13,
    sender: "khalil ben mansour",
    lastMsg: "hello how are you...",
    timeAgo: "5 min",
    numUnreadMsg: 3,
  },
];

const ChatList = ({ type }) => {
  return (
    <div className={`${type}-list`}>
      <ul className={`${type}-list-list`}>
        {msgDesc.map((e) => (
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
                <p className={`${type}-last-msg`}>
                  {e.lastMsg} <small>{e.timeAgo}</small>
                </p>
              </div>
              <div className={`${type}-right`}>
                <div className={`${type}-msg-num`}>{e.numUnreadMsg}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
