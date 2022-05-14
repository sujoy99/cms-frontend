import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './login.css';
import profile from "./../images/team.png";
import email from "./../images/gmail.png";
import pass from "./../images/password.png";
function Login() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();
  
  const routeChange = () =>{ 
		let path = `/`; 
		navigate(path);
		// window.location(path)
	  }
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="text" placeholder="User email" className="name" required/>
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="Password" className="name" required/>
           </div>
          <div className="login-button">
          <button className="btn btn-style btn-style-border" type="submit" onClick={routeChange}> Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;