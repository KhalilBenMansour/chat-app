import "./login.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";

const Login = () => {
  const [input, setInput] = useState({ userName: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message, loginSuccess, isAuth } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth, navigate]);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(input));
    setInput({ userName: "", password: "" });
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-header">
          <h3 className="form-title">Log In</h3>
        </div>
        <form action="" className="login-form" onSubmit={handleSubmit}>
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
              name="userName"
              className="input-field"
              placeholder="username"
              value={input.userName}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <MdPassword className="user-icon" />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
          <div className="forgot-div">
            <a href="#">forgot your password ?</a>
          </div>
          <div className="check-div">
            <input type="checkbox" id="remember" className="check-input" />
            <label htmlFor="remember" className="check-label">
              remember me
            </label>
          </div>
          {/* <Link to="/"> */}
          <button className="button-login">
            <span className="button-text">Log In</span>
            <FaSignOutAlt className="button-icon" />
          </button>
          {/* </Link> */}
        </form>
        <div className="login-footer">
          <p className="register-div">
            Don't have an account ?{" "}
            <Link to="/signup" className="register-link">
              Register{" "}
            </Link>
          </p>
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className={loginSuccess ? "success-div" : "error-div"}>
              <p className={loginSuccess ? "success-msg" : "error-msg"}>
                {message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
