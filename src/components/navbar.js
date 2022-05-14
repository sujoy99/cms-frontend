import React, { useState } from 'react'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Navbar = () => {

	const [show, setShow] = useState(false)
	let navigate = useNavigate(); 
	const routeChange = () =>{ 
		let path = `/signup`; 
		navigate(path);
		// window.location(path)
	  }
	const routeChange1 = () =>{ 
	  let path1 = `/login`; 
	  navigate(path1);
	}

	return (
		<>
			<section className="navbar-bg" >
				<nav className="navbar navbar-expand-lg navbar-light" >
					<div className="container">
						{/* <a class="navbar-brand" href="#">Navbar</a> */}
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setShow(!show) }}>
							<span className="navbar-toggler-icon"></span>
						</button>
						<img src="./images/logo512.png" alt="" className="img-fluid rounded" height="50px" width="50px"></img>
						<div className={`collapse navbar-collapse ${show ? "show" : " "} `} >
							<ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/chef">Chef</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/package">Package</a>
								</li>
								<li className="nav-item">
									<div className="">

										{/* <img src="./images/logo512.png" alt="" class="img-fluid"></img> */}
									</div>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Blog</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">About Us</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Contact</a>
								</li>

							</ul>
							<form className="d-flex">

								<button className="btn btn-style" type="submit" onClick={routeChange}>Sign Up</button>
								<button className="btn btn-style btn-style-border" type="submit" onClick={routeChange1}> Log In</button>
							</form>
						</div>

					</div>
				</nav>

			</section>
		</>
	)
}

export default Navbar
