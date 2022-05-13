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
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <h2>Center Mode</h2>
                <Slider {...settings}>
                    <div>
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}