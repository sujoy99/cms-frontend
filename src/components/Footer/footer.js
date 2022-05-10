
import React from "react";
import "./footer.css";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Office Address</h2>
            <h1 className="list-unstyled">
              <li>Block C, Road-08, BashundharaR/A</li>
              <li>+8801826192068</li>
              <li>chef@gmail.com</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>We Accept</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} JE RADHE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
