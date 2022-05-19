import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { Dropdown } from 'react-bootstrap'
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
            <section className="navbar-bg" >
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setShow(!show) }}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : " "} `} >
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 "> 
                                <li className="nav-item">
                                    <div className="">
                                       <img src="./images/logo512.png" alt="" className="img-fluid rounded" height="50px" width="50px"></img>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">AboutUs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>

                                <form className="d-flex">

                                    <a className="btn btn-style btn-style-border" href="/signup" style={{ paddingTop: "6px" }}>Sign Up</a>
                                    <a className="btn btn-style btn-style-border" href="/login" style={{ paddingTop: "6px" }}>Log In</a>
                                </form>
                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="link" id="dropdown-basic">
                                        {/* Dropdown Button 
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/login"> Log In</Dropdown.Item>
                                        <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                        <Dropdown.Item href="/UserProfile">User Profile</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                        

                            </ul>
                        </div>

                    </div>
                </nav>

            </section>
        </>

    )
}
export default Navbar
