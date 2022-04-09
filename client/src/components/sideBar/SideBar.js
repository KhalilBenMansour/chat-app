import "./sideBar.scss";
import { BsChatSquareText } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { BiChat } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
const SideBar = () => {
  return (
    <div className="sideBar">
      <ul className="sideBar-menu">
        <li className="logo">
          <BsChatSquareText />
        </li>
        <li className="toolkit-0">
          <BiChat />
        </li>
        <li className="toolkit-1">
          <RiContactsLine />
        </li>
        <li className="setting">
          <AiOutlineSetting />
        </li>
        <li className="dark-mode">
          <MdOutlineDarkMode />
        </li>
        <li className="setting">
          <AiOutlineSetting />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
