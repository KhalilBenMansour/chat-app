import "./main.scss";
import ChatBox from "./components/chatBox/ChatBox";
import Container from "./components/container/Container";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
