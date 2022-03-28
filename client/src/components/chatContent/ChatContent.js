import "./chatContent.scss";

const ChatContent = ({ msges }) => {
  return (
    <div className="chatContent">
      <div className="msgs">
        {msges.map((msg) => (
          <div
            key={msg.msgId}
            className={msg.currentUser ? "my-msg" : "other-msg"}
          >
            {msg.text}
          </div>
        ))}
        {/* <div className="my-msg">
          hi oussema thanks for your support you are such a generous man who
          helped me when i were stuck
        </div>
        <div className="my-msg">hi ous</div>

        <div className="other-msg">thank you</div>
        <div className="other-msg">hi khalil</div>

        <div className="my-msg">
          hi oussema thanks for your support you are such a generous man who
          helped me when i were stuck
        </div>
        <div className="my-msg">hi ous</div> */}
      </div>
    </div>
  );
};

export default ChatContent;
