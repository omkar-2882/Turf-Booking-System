import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Cookies from 'js-cookie';
import "./Login.css";

const ManagerLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/managerLogin", {
        username,
        password,
      });

      const { success, curruser, token } = response.data;

      if (success) {
        // Login successful
        Cookies.set('token', token);
        Cookies.set('user', curruser);
        history.push('/');   
        window.location.reload();   
      } else {
        // Login failed
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Manager Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ManagerLogin;
