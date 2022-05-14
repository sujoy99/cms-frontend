import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import signupValidation from '../validation/signupValidation'
import './signup.css';
import profile from "./../images/team.png";
function Signup() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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
        setErrors(signupValidation(values))
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
                        <h1>Sign Up</h1>
                        <form action="/">
                            <div>
                                <input type="text" placeholder="User email" className="name form-input" name="email" id="email" onChange={handleChange} value={values.email} />
                                {errors.email && <p style={{ color: "red" }}>*{errors.email}</p>}
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Password"  className="name form-input" name="password" id="password" onChange={handleChange} value={values.password} />
                                {errors.password && <p style={{ color: "red" }}>*{errors.password}</p>}
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Password"  className="name form-input" name="confirmPassword" id="confirmPassword" onChange={handleChange} value={values.confirmPassword} />
                                {errors.confirmPassword && <p style={{ color: "red" }}>*{errors.confirmPassword}</p>}
                            </div>
                            <div className="Submit">
                                <button className="btn btn-style btn-style-border" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;