import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Registration.css';
import axios from "axios"
import Cookies from 'js-cookie';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const regData= {
      firstName,
      middleName,
      lastName,
      age,
      username,
      password,
      confirmPassword,
      email,
      phone
    };

    await register(regData)
  };

  const register = async (regData) => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/register`, 
        regData
        // config 
      );
      if(data.success===true){
        console.log("Register successful")
        Cookies.set('token', data.token);
        history.push('/');      
      }
      else{
        console.log(data.message)
      }
      } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>User Registration</h2>
        <div className="name-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <input
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={handleMiddleNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
