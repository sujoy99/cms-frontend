import React, { Component } from "react";
import Slider from "react-slick";
import profile from "../images/1.jpg";
import profile1 from "../images/2.webp";
import profile2 from "../images/3.jpg";
import profile3 from "../images/4.jpg";
import profile4 from "../images/5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class ImageSlider extends React.Component {
    
    render() {
        const settings = {
            className: "center",
            ImageSlider: true,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 5,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                    {/* <div>

                        <h1>Package1</h1>
                    </div> */}
                    <div>
                        <img src={profile} alt="profile" className="profile" />
                        <a href="/Package"><h1>Package 1</h1></a>
                    </div>
                    <div>
                        <img src={profile1} alt="profile" className="profile" />
                        <a href="/Package"><h1>Package 2</h1></a>
                    </div>
                    <div>
                        <img src={profile2} alt="profile" className="profile" />
                        <a href="/Package"><h1>Package 3</h1></a>
                    </div>
                    <div>
                        <img src={profile3} alt="profile" className="profile" />
                        <a href="/Package"><h1>Package 4</h1></a>
                    </div>
                    <div>
                        <img src={profile4} alt="profile" className="profile" />
                        <a href="/Package"><h1>Package 5</h1></a>
                    </div>
                    <div>
                        <img src={profile2} alt="profile" className="profile" />
                        <a href="/Package"><h1>Package 6</h1></a>
                    </div>
                </Slider>
            </div>
        );
    }
}