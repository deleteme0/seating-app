
import './loginpage.css';
export default function About() {

  const handleClick = () =>{
    <div>
      <a href="selectpage.tsx">Login</a>
    </div>
  }

  return (
    <body className='body'>
  <div className='login-container'>
    <h2 className='login-header'>Welcome</h2>
    <div className='login-form-input'>
      <label>Username:</label>
      <input type="text" />
    </div>
    <div className='login-form-input'>
      <label>Password:</label>
      <input type="password" />
    </div>
    <div className='login-form-button'>
      <button type="submit" onClick={handleClick()}>Login</button>
    </div>
  </div>
</body>

  )
}