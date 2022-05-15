import React, { useState } from 'react'

const Navbar = () => {
	const [show, setShow] = useState(false)

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
									<a className="nav-link active" aria-current="page" href="/">Home</a>
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
								<a className="btn btn-style" href="/signup" style={{ paddingTop: "6px" }}>Sign Up</a>
								<a className="btn btn-style btn-style-border" href="/login" style={{ paddingTop: "6px" }}>Log In</a>
							</form>
						</div>

					</div>
				</nav>

			</section>
		</>
	)
}

export default Navbar
