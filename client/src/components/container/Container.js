import Chat from "../chat/Chat";
import ChatMenu from "../chatMenu/ChatMenu";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import "./container.scss";
const Container = () => {
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
