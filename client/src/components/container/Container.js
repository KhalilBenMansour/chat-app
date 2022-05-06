import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chat from "../chat/Chat";
import ChatMenu from "../chatMenu/ChatMenu";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import "./container.scss";
const Container = () => {
  const { isAuth } = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate("/login");
  }, [isAuth, navigate]);

  return (
    <div className="container">
      <SideBar />
      <NavBar />
      <ChatMenu />
      <Chat />
    </div>
  );
};

export default Container;
