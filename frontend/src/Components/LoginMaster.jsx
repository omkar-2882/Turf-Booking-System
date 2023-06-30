import { useHistory, Link } from "react-router-dom";
import React from "react";
import "./LoginMaster.css";
import Navbar from "./Navbar";

const LoginMaster = () => {
  const history = useHistory();

  // const redirect = (endpoint) => {
  //   history.push(endpoint);
  //   // window.location.reload();
  // }

  return (
    <>
    {/* <Navbar isLogin={false}/> */}
    <div className="login-master">
      <h1>Welcome to Turf-King</h1>
      <div className="button-container">
          <Link to="/userlogin" className="user-button">Login As User</Link>
          <Link to="/managerlogin" className="manager-button">Login As Manager</Link>
          <Link to="/register" className="registration-button">New User Registration</Link>
      </div>
    </div>
    </>
  );
};

export default LoginMaster;
