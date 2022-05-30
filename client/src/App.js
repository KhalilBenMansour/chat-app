import "./main.scss";
import Container from "./components/container/Container";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Private from "./components/private/Private";
import Welcome from "./components/welcome/Welcome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    isAuth && dispatch(getUser());
  }, [dispatch, isAuth]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Container />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify/:id/:confirmCode" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
