import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import loginValidation from '../validation/loginValidation'
import './login.css';
import profile from "./../images/team.png";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  let navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    console.log(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    setErrors(loginValidation(values))
    console.log(errors);
    setDataIsCorrect(true)
    console.log("no error---submited")
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      // ---> api call & take neccessary action here
      console.log("submited value", values);
      navigate(`/`);
    }
  }, [errors])

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <form action="/">
              <div>
                <input type="text" placeholder="User email" className="name" name="email" id="email" onChange={handleChange} value={values.email} />
                {errors.email && <p style={{ color: "red" }}>*{errors.email}</p>}
              </div>
              <div className="second-input">
                <input type="password" placeholder="Password"  className="name" name="password" id="password" onChange={handleChange} value={values.password} />
                {errors.password && <p style={{ color: "red" }}>*{errors.password}</p>}
              </div>
              <div className="login-button">
                <button className="btn btn-style btn-style-border" onClick={handleSubmit}>Login</button>
              </div>
              <p className="link">
                <a href="#">Forgot password ?</a> Or <a href="/signup">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;