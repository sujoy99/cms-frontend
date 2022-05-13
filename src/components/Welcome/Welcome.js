import React,{Component} from 'react'
// import './Welcome.css';
// import ImageSlider from '../ImageSlider';
// import { SliderData } from '../SliderData';

// function Welcome() {
//     return (
//         <div>
//              <ImageSlider slides={SliderData} />;
//         </div>
//     )
// }

// export default Welcome
import ImageSlider from "../ImageSlider/ImageSlider";
import "../Welcome/Welcome.css"
function Welcome() {
    return (
        <div className="container mt-5 carousel">
            <ImageSlider />
        </div>
    );
}

export default Welcome;

