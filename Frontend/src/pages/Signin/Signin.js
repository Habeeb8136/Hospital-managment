import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Signin = ({setUserLogged,userLogged}) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  
    const handleLogin = () => {
      // Here you would check if the user exists in your database or API
      // If the user exists, update the state variable and redirect to the dashboard page
      if (username === 'user' && password === 'password') {
        setRedirectToDashboard(true);
      }else{
        alert('username or password do no exist')
      }
    };
  
    if (redirectToDashboard) {
      return <Navigate to="/dashboard" />;
    }
  
    return (
      <div>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }


export default Signin;
