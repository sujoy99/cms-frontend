import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import { Dropdown } from 'react-bootstrap'
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
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
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
										<img src="./images/logo512.png" alt="" className="img-fluid rounded" height="50px" width="50px"></img>
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
								<Dropdown>
								  <Dropdown.Toggle variant="link" id="dropdown-basic">
									Dropdown Button
								  </Dropdown.Toggle>

								  <Dropdown.Menu>
									<Dropdown.Item href="/login"> Log In</Dropdown.Item>
									<Dropdown.Item href="/">Log Out</Dropdown.Item>
									<Dropdown.Item href="//UserProfile">User Profile</Dropdown.Item>
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
							<form className="d-flex"> 

								<a className="btn btn-style btn-style-border" href="/signup" style={{ paddingTop: "6px" }}>Sign Up</a>
								{/* <a className="btn btn-style btn-style-border" href="" style={{ paddingTop: "6px" }}>Log Out</a> */}
							</form>
						</div>

					</div>
				</nav>

			</section>
		</>

	)
}
export default Navbar

// 			import React,{useState} from 'react';
// import {NavLink, Link} from 'react-router-dom';
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import logo from '../../img/logo.png';
// const Navbarmenu = () => {
//     const [isMenu, setisMenu] = useState(false);
//     const [isResponsiveclose, setResponsiveclose] = useState(false);
//     const toggleClass = () => {
//       setisMenu(isMenu === false ? true : false);
//       setResponsiveclose(isResponsiveclose === false ? true : false);
//   };
//     let boxClass = ["main-menu menu-right menuq1"];
//     if(isMenu) {
//         boxClass.push('menuq2');
//     }else{
//         boxClass.push('');
//     }
//     const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//     const toggleSubmenu = () => {
//       setMenuSubMenu(isMenuSubMenu === false ? true : false);
//     };
//     let boxClassSubMenu = ["sub__menus"];
//     if(isMenuSubMenu) {
//         boxClassSubMenu.push('sub__menus__Active');
//     }else {
//         boxClassSubMenu.push('');
//     }
//     return (
//     <header className="header__middle">
//         <div className="container">
//             <div className="row">
//                 {/* Add Logo  */}
//                 <div className="header__middle__logo">
//                     <NavLink exact activeClassName='is-active' to="/">
//                         <img src={logo} alt="logo" />
//                     </NavLink>
//                 </div>
//                 <div className="header__middle__menus">
//                     <nav className="main-nav " >
//                     {/* Responsive Menu Button */}
//                     {isResponsiveclose === true ? <>
//                         <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
//                     </> : <>
//                         <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
//                     </>}
//                     <ul className={boxClass.join(' ')}>
//                         <li  className="menu-item" >
//                             <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink>
//                         </li>
//                         <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
//                         <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop <FiChevronDown /> </Link>
//                             <ul className={boxClassSubMenu.join(' ')} >
//                                 <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
//                                 <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
//                             </ul>
//                         </li>
//                         <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
//                     </ul>
//                     </nav>
//                 </div>
//             </div>
// 	    </div>
//     </header>
//     )
// }
// export default Navbarmenu
