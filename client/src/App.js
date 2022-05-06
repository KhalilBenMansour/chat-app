import "./main.scss";
import Container from "./components/container/Container";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Private from "./components/private/Private";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="" element={<Container />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
