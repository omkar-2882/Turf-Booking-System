import { useHistory } from 'react-router-dom';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import './UserLogin.css';
import Cookies from 'js-cookie';
const google = "/google-logo.png"

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

      const { success, token } = response.data;

      if (success) {
        // Login successful
        Cookies.set('token', token);
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

  const handleGoogleLogin = () => {
    // Perform Google Sign-In logic
    window.gapi.auth2.getAuthInstance().signIn().then((googleUser) => {
      const idToken = googleUser.getAuthResponse().id_token;
      // You can now use the idToken to authenticate with your server
      console.log('Google Sign-In Successful:', idToken);
    }, (error) => {
      console.error('Google Sign-In Error:', error);
    });
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
        <button type="submit">Login</button>
        <div className="login-options">
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img
              src="./google-logo.png" // Replace with the path to your Google logo image
              alt="Google Logo"
              className="google-logo"
            />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
