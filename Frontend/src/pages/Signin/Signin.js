import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RiAdminLine} from 'react-icons/ri'
import './Signin.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user';


const Signin = () => {
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    console.log(user.loggedIn)
  
    const handleLogin = () => {
      // Here you would check if the user exists in your database or API
      // If the user exists, update the state variable and redirect to the dashboard page     
      if (username === 'admin' && password === 'admin') {
        dispatch(loginUser(true))
        setTimeout(() => {
          setRedirectToDashboard(true);
        }, 500);
        
      }else{
        alert('username or password do no exist')
      }
    }
      if (redirectToDashboard) {
          return <Navigate replace to="/" />;
      }
      
       
    return (
      <div className='signin-page'>
      <h2>Employee Department Manager</h2>
      <div className='signin-container'>
      <div className='admin'>
        <RiAdminLine className='admin-pic' />
        <h5>Admin Login</h5>
      </div>
          <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder='username'></input>
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' type='password'></input>
          <Button onClick={()=>handleLogin()}>LOGIN</Button>
      </div>
      <div>
        <small>username= admin <br></br>password= admin</small>
      </div>
      </div>
    );
  }


export default Signin;
