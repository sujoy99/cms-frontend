import React, { Component } from "react";
import Slider from "react-slick";
import profile from "../images/team.png";
import profile1 from "../images/password.png";
import profile2 from "../images/phone.png";
import profile3 from "../images/gmail.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class ImageSlider extends React.Component{
    render() {
        const settings = {
            className: "center",
            ImageSlider: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                    <div>
                        <img src={profile1} alt="profile" className="profile" />
                    </div>
                    <div>
                        <img src={profile2} alt="profile" className="profile" />
                    </div>
                    <div>
                        <img src={profile3} alt="profile" className="profile" />
                    </div>
                    <div>
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                    <div>
                        <img src={profile2} alt="profile" className="profile" />
                    </div>
                </Slider>
            </div>
        );
    }
}