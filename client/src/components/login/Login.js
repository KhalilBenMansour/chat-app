import "./login.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-header">
          <h3 className="form-title">Log In</h3>
        </div>
        <form action="" className="login-form">
          <div className="login-group">
            <div className="login-item">
              <BsFacebook />
            </div>
            <div className="login-item">
              <FcGoogle />
            </div>
          </div>

          <span className="text-login">or use your account</span>

          <div className="input-div">
            <AiOutlineUser className="user-icon" />
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="username"
            />
          </div>

          <div className="input-div">
            <MdPassword className="user-icon" />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="password"
            />
          </div>
          <div className="forgot-div">
            <a href="#">forgot your password ?</a>
          </div>
        </form>
        <div className="login-footer">
          <button className="button-login">
            <span className="button-text">Log In</span>
            <FaSignOutAlt className="button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
