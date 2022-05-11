import React from 'react'
import './Welcome.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

function Welcome() {
    return (
        <div>
             <ImageSlider slides={SliderData} />;
        </div>
    )
}

export default Welcome
