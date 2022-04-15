import "./chatContent.scss";

const ChatContent = ({ msges, users }) => {
  const findUser = (id) => {
    return users.find((user) => user.userId === id);
  };
  return (
    <div className="chatContent">
      <div className="msgs">
        {msges.map((msg) => (
          <div
            key={msg.msgId}
            className={msg.currentUser ? "my-msg" : "other-msg"}
          >
            <figure className={msg.currentUser ? "my-figure" : "other-figure"}>
              <img
                src={msg.photo}
                alt={findUser(msg.userId).userName}
                className="person-photo"
              />
            </figure>
            <div className="person-text">{msg.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatContent;
