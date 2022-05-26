import "./welcome.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { verifyUser } from "../../store/userSlice";

const Welcome = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const { loading, verified, messageV } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(verifyUser(params));
  }, []);

  return loading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : verified ? (
    <div className="success-div">
      <h3 className="success-msg">{messageV}</h3>
      <Link className="link" to="/login">
        Please Login
      </Link>
    </div>
  ) : (
    <div className="error-div">
      <h3 className="error-msg">{messageV}</h3>
      <Link className="link" to="/signup">
        Please register
      </Link>
    </div>
  );
};

export default Welcome;
