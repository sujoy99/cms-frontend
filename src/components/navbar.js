import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { Dropdown } from 'react-bootstrap'
import Logo from "./images/pic11.jpg";
// import logo from '../../img/logo.png';
const Navbar = () => {
	const [show, setShow] = useState(false);
	const [isMenu, setisMenu] = useState(false);
	const [isResponsiveclose, setResponsiveclose] = useState(false);
	const toggleClass = () => {
		setisMenu(isMenu === false ? true : false);
		setResponsiveclose(isResponsiveclose === false ? true : false);
	};
	let boxClass = ["main-menu menu-right menuq1"];
	if (isMenu) {
		boxClass.push('menuq2');
	} else {
		boxClass.push('');
	}
	const [isMenuSubMenu, setMenuSubMenu] = useState(false);
	const toggleSubmenu = () => {
		setMenuSubMenu(isMenuSubMenu === false ? true : false);
	};
	let boxClassSubMenu = ["sub__menus"];
	if (isMenuSubMenu) {
		boxClassSubMenu.push('sub__menus__Active');
	} else {
		boxClassSubMenu.push('');
	}

	return (
		<>
			<section className="navbar-bg" style={{backgroundColor: "bisque"}}>
				<nav className="navbar navbar-expand-lg navbar-light" >
					<div className="container" >
						<div className="profile">
							<img src={Logo} alt="profile" className="profile" height="" width=""></img>
						</div>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setShow(!show) }}>
							<span className="navbar-toggler-icon"></span>
						</button>
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
									<a className="nav-link" href="#">Blog</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Contact</a>
								</li>

								<form className="d-flex">

									<a className="btn btn-style btn-style-border" href="/signup" style={{ paddingTop: "6px" }}>Sign Up</a>
									{/* <a className="btn btn-style btn-style-border" href="" style={{ paddingTop: "6px" }}>Log Out</a> */}
								</form>
								<Dropdown>
									<Dropdown.Toggle variant="link" id="dropdown-basic">
										<h3>Others</h3>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="/login"> Log In</Dropdown.Item>
										<Dropdown.Item href="/logOut">Log Out</Dropdown.Item>
										{/* <Dropdown.Item href="/UserProfile">User Profile</Dropdown.Item> */}
										{/* <Dropdown.Item href="/Dashboard">Dashboard</Dropdown.Item> */}
									</Dropdown.Menu>
								</Dropdown>
								{/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> <FiChevronDown /> </Link>
									<ul className={boxClassSubMenu.join(' ')} >
										<li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/login`}> Log In </NavLink> </li>
										<li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Log Out </NavLink> </li>
										<li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/UserProfile`}> User Profile </NavLink> </li>
									</ul>
								</li> */}

							</ul>
						</div>

					</div>
				</nav>

			</section>
		</>

	)
}
export default Navbar


