import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import "./navBar.scss";
const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navBar">
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};

export default NavBar;
