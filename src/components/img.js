import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

import React, { Component } from 'react'

export class img extends Component {
    render() {
        return (
            <div>
                <p className="info-title ga-class" id="faq-title"  style={{color:"black"}}>GALLERY</p>
                <ImageSlider slides={SliderData} />
            </div>
        )
    }
}

export default img
