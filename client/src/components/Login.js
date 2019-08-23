import React, { useState } from "react";
import axios from 'axios';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [creds, setCreds] = useState({ username: '', password: ''})
  console.log(creds)
  const handleChange = e => {
    console.log(e.target.value)
    setCreds({
      ...creds,
        [e.target.name] : e.target.value
    })
  }
  
  const login = e => {
    e.preventDefault()
    axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
    })
    .catch(err => console.error('there was an error', err.response))
  }

  return (
    <>
      <h2>Login here!</h2>
      <form onSubmit={login}>
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={creds.username}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={creds.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
