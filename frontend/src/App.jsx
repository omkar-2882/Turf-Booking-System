import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import BottomSection from "./Components/BottomSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import UserLogin from "./Components/UserLogin";
import ManagerLogin from "./Components/ManagerLogin";
import Registration from "./Components/Registration";
import MainContent from "./Components/MainContent";
import BookingManager from "./Components/BookingManager";
import TurfDetailsPage from "./Components/TurfDetailsPage";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false); // Set initial value to false

  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = Cookies.get("token");
      if (!token || hasTokenExpired(token)) {
        setisLoggedin(false);
      } else {
        setisLoggedin(true); // Set isLoggedin to true if token is valid
      }
    };

    checkTokenExpiration();
  }, []);

  const hasTokenExpired = (token) => {
    const tokenExpiration = getTokenExpiration(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return tokenExpiration && currentTime > tokenExpiration;
  };

  const getTokenExpiration = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const tokenData = JSON.parse(window.atob(base64));
      return tokenData.exp;
    } catch (error) {
      console.log("Invalid token format");
      return null;
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/managerlogin" component={ManagerLogin} />
        <Route path="/register" component={Registration} />
      </Switch>
      <Router>
        {isLoggedin ? (
          <div>
            <Navbar />
            <Switch>
              <Route path="/bookingManager" component={BookingManager} />
              <Route path="/turfDetails" component={TurfDetailsPage} />
              <Route path="/" component={MainContent} />
            </Switch>
            <BottomSection/>
          </div>
        ) : (
          <UserLogin />
        )}
      </Router>
    </Router>

  );
}

export default App;
