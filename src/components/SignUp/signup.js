import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './signup.css';
import profile from "./../images/team.png";
import email from "./../images/gmail.png";
import pass from "./../images/password.png";
function Signup() {
    const [show, setShow] = useState(false)
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
        // window.location(path)
    }


    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: ""
      })
      const [errors, setErrors] = useState({})
      const [dataIsCorrect, setDataIsCorrect] = useState(false)

    //   let navigate = useNavigate();

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
        // setErrors(loginValidation(values))
        console.log(errors);
        setDataIsCorrect(true)
        console.log("no error---submited")
      }

      useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
          // ---> api call & take neccessary action here
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
                                <input type="text" placeholder="User email" className="name" required />
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Password" className="name" required />
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder=" Confirm Password" className="name" required />
                            </div>
                            <div className="Submit">
                                <button className="btn btn-style btn-style-border" type="submit" onClick={routeChange}> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;