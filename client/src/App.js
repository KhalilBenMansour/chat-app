import "./main.scss";
import ChatBox from "./components/chatBox/ChatBox";
import Container from "./components/container/Container";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      {/* <ChatBox /> */}
      {/* <Container /> */}
      <Login />
      <Signup />
    </div>
  );
}

export default App;
