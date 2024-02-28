'use client';
import { useState } from 'react';
import './loginpage.css';
//import { useHistory } from 'react-router-dom'; // Assuming you are using React Router

export default function About() {
  //const history = useHistory();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  
  // Initialize useHistory hook
  
  const handleClick = () => {
    console.log(username,password)
    // username = "abv";
    //history.push('/selectpage'); // Redirect to the selectpage route
  }

  return (
    <div className='body'>
      <div className='login-container'>
        <h2 className='login-header'>Welcome</h2>
        <div className='login-form-input'>
          <label>Username:</label>
          <input type="text" value={username} onChange={event=>{setUsername(event.target.value)}} size={11}/>
        </div>
        <div className='login-form-input'>
          <label>Password:</label>
        <input type="password" onChange={event=>{setPassword(event.target.value)}} value={password} size={11}/>
        {/* <input type="text" name="room" id="room" value={room} onChange={event=>{setRoom(event.target.value)}} /> */}
        </div>
        <div className='login-form-button'>
          <button type="submit" onClick={handleClick}><b>Login</b></button>
        </div>
      </div>
    </div>
  );
}
