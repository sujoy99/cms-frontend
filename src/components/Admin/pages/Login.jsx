import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const [userMail, setuserMail] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    goToDashboard();
  }, []);
  const goToDashboard = () => {
    // loginAdmin();
    console.log(userMail);

    console.log(
      "localstorage:",
      localStorage.getItem("adminEmail"),
      "userMal:",
      userMail
    );
    if (userMail === "admin001@gmail.com") {
      history.push("/categoryname");
    } else {
      history.push("/");
    }
  };
  const loginAdmin = async () => {
    await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailref.current.value,
        password: passwordref.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setuserMail(json.admin.email);
        localStorage.setItem("adminEmail", json.admin.email);
        history.push("/categoryname");
      })
      .catch((error) => {
        console.log(error);
        setError("Please Enter correctly");
      });
  };
  return (
    <div
      className="container-fluid"
      style={{ background: "rgba(201, 229, 255, 0.8)" }}
    >
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login </h2>
          <div className="text-center mb-5 text-dark">Admin</div>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                {error !== "" ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  ""
                )}
                <input
                  ref={emailref}
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  onFocus={() => setError("")}
                  onBlur={() => setError("")}
                />
              </div>
              <div className="mb-3">
                <input
                  ref={passwordref}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  onFocus={() => setError("")}
                  onBlur={() => setError("")}
                />
              </div>
              <div className="text-center">
                <Link style={{ textDecoration: "none" }} to="#">
                  {" "}
                  <button
                    onClick={loginAdmin}
                    type="submit"
                    className="btn btn-success rounded-pill px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
