import React, { useState } from 'react'

const Navbar = () => {

	const [show, setShow] = useState(false)

	return (
		<>
			<section className="navbar-bg" >
				<nav class="navbar navbar-expand-lg navbar-light" >
					<div class="container">
						{/* <a class="navbar-brand" href="#">Navbar</a> */}
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setShow(!show) }}>
							<span class="navbar-toggler-icon"></span>
						</button>
						<img src="./images/logo512.png" alt="" class="img-fluid rounded" height="50px" width="50px"></img>
						<div class={`collapse navbar-collapse ${show ? "show" : " "} `} >
							<ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">Home</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Chef</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Package</a>
								</li>
								<li class="nav-item">
									<div className="">

										{/* <img src="./images/logo512.png" alt="" class="img-fluid"></img> */}
									</div>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Blog</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">About Us</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Contact</a>
								</li>

							</ul>
							<form class="d-flex">

								<button class="btn btn-style" type="submit">Sign Up</button>
								<button class="btn btn-style btn-style-border" type="submit">Log In</button>
							</form>
						</div>

					</div>
				</nav>

			</section>
		</>
	)
}

export default Navbar
