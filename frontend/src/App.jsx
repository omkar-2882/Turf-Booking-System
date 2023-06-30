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
import LoginMaster from "./Components/LoginMaster";

import turf from "./turf.jpg"

function App() {
  const [isLoggedin, setisLoggedin] = useState(false); // Set initial value to false
  const [user, setUser] = useState("user");

  useEffect(() => {
    const user = Cookies.get("user");
    if (user && user == "manager") {
      setUser("manager");
    }
  }, []);

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
    // console.log(isLoggedin);
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
    <>
      <div>
        {/* <Layout /> */}
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <Route path="/userlogin" component={UserLogin} />
            <Route path="/managerlogin" component={ManagerLogin} />
            <Route path="/register" component={Registration} />
            <Route path="/loginMaster" component={LoginMaster} />
            {/* <Router> */}
              {isLoggedin ? (
                <div className="container">
                  <Switch>
                    <Route exact path="/" 
                    render={(props) => <MainContent {...props} user={user} />}
                    />
                    <Route
                      exact
                      path="/bookingManager"
                      render={(props) => <BookingManager {...props} user={user} />}
                    />
                    <Route
                      exact
                      path="/turfDetails"
                      render={(props) => <TurfDetailsPage {...props} user={user} />}
                    />
                  </Switch>
                </div>
              ) : (
                <LoginMaster />
              )}
              <BottomSection />
            {/* </Router> */}
          </Switch>

        </Router>


      </div>
    </>
  );
}

export default App;
