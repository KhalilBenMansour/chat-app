import "./signup.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword, MdAlternateEmail } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/userSlice";

const Signup = () => {
  const [registerObj, setRegisterObj] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const { loading, registerSuccess, messageR } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setRegisterObj({ ...registerObj, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerObj));
    setRegisterObj({ userName: "", email: "", password: "" });
  };
  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-header">
          <h3 className="form-title">Sign Up</h3>
        </div>
        <form action="" className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-group">
            <div className="signup-item">
              <BsFacebook />
            </div>
            <div className="signup-item">
              <FcGoogle />
            </div>
          </div>

          <span className="text-signup">
            or use your email for registration
          </span>

          <div className="input-div">
            <AiOutlineUser className="user-icon" />
            <input
              type="text"
              name="userName"
              className="input-field"
              placeholder="username"
              value={registerObj.userName}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <MdAlternateEmail className="user-icon" />
            <input
              type="text"
              name="email"
              className="input-field"
              placeholder="email"
              value={registerObj.email}
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
              value={registerObj.password}
              onChange={handleChange}
            />
          </div>
          <button className="button-signup">
            <span className="button-text">Sign Up</span>
            <IoIosCreate className="button-icon" />
          </button>
        </form>
        <div className="signup-footer">
          <p className="login-div">
            Already have an account ?{" "}
            <Link to="/login" className="login-link">
              Log In{" "}
            </Link>
          </p>
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : messageR ? (
            <div className={registerSuccess ? "success-div" : "error-div"}>
              <p className={registerSuccess ? "success-msg" : "error-msg"}>
                {messageR}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;
