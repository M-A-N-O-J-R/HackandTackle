import React, { Component } from 'react'
import {Carousel } from 'react-bootstrap'
import img1 from '../img/1.jpg'


export class gallery extends Component {
    render() {
        return (
            <div>
            <p className="info-title gallery-title">GALLERY</p>
            <div className="gallery">
            
            <Carousel  >
              <Carousel.Item>
                <img
                   className="d-block w-100"
                   src={img1}
                   alt="First slide"
                />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
            </div>
            </div>
        )
    }
}

export default gallery
