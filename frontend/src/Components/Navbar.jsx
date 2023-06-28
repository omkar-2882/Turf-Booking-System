import { useHistory } from "react-router-dom";
import React from 'react';
import Cookies from 'js-cookie';
import './Navbar.css';

function Navbar() {

  // const [logout, setlogout] = useState(false);
  const history = useHistory();

  const removeCookies = () => {
    // setlogout(!logout)
    Cookies.set("token", "");
    history.push('/userLogin');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">
            <i className="fas fa-futbol"></i>
            All Sports
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i>
            See all sports grounds of your city
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-futbol"></i>
            Football Ground Booking in India
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="fas fa-cricket"></i>
            Cricket Ground Booking in India
          </a>
        </li> */}
        <li>
          <a href="#">
            <i className="fas fa-dumbbell"></i>
            Events Booking in India
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-tags"></i>
            Offers & Discounts
          </a>
        </li> 
        <li className='logoutbtn' onClick={removeCookies}>
          {/* <a href="/logout"> */}
          <i className="fas fa-sign-out-alt"></i>
            Logout
          {/* </a> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
