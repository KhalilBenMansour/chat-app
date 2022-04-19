import "./signup.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword, MdAlternateEmail } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-header">
          <h3 className="form-title">Sign Up</h3>
        </div>
        <form action="" className="signup-form">
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
              name="username"
              className="input-field"
              placeholder="username"
            />
          </div>
          <div className="input-div">
            <MdAlternateEmail className="user-icon" />
            <input
              type="text"
              name="email"
              className="input-field"
              placeholder="email"
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
