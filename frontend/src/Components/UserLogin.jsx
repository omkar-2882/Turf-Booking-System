import { useHistory } from 'react-router-dom';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import './UserLogin.css';
import Cookies from 'js-cookie';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your login logic here
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });

      const { success, curruser,  token } = response.data;

      if (success) {
        // Login successful
        Cookies.set('token', token);
        Cookies.set('user', curruser);
        console.log("Login Successful")
        history.push('/');        
        window.location.reload();
      } else {
        // Login failed
        console.log('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    // Load the Google Sign-In API
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.onload = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: '638670464442-v9u58gklv349kf3g1hcr2khn4hoklbo3.apps.googleusercontent.com',
          });
        });
      };
      document.body.appendChild(script);
    };

    // loadGoogleAPI();
  }, []);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>User Login</h2>
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
        <br/>
        <button type="submit">Login</button>
        {/* <div className="login-options">
          <button className="google-login-button">
            Login with Google
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default UserLogin;
