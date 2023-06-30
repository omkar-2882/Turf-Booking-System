import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [cookies, setCookies] = useState(false);
  const history = useHistory();

  const removeCookies = () => {
    // setlogout(!logout)
    Cookies.set("token", "");
    history.push("/loginMaster");
    window.location.reload();
  };

  const CheckCookies = () => {

    // if (Cookies.get("token") == "") {
    //   setCookies(!Cookies);
    // }
  };

  // useEffect(() => {
  //   CheckCookies();
  
  // }, [])
  

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Turfs</Link>
        </li>
        {props.user==="manager" && (<li>
          <Link to="/bookingManager">Manager Booking</Link>
        </li>  )}      
        {!props.isLogin && (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {props.isLogin && (
          <li className="logoutbtn" onClick={removeCookies}>
            {/* <a href="/logout"> */}
            <a href="#">Logout</a>
            {/* </a> */}
          </li>
        )}
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
