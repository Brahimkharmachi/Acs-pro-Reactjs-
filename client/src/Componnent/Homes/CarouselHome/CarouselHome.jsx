import React from 'react'
import "./carouselhomes.css"
import { Carousel } from 'react-bootstrap';


function CarouselHome() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carou"
          src="./carouselone.jpg"
          alt="First slide"
          style={{ width: '1349px', height: '431px' }}
        />
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselHome
