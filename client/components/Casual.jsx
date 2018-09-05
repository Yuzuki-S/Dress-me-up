import React from 'react'
import {Grid, Row, Col, Thumbnail,
  Carousel
  
  
  } from 'react-bootstrap'

function Casual () {
  return (
    <div>
    <div className='box'>
      <h1>Casual Package</h1>
      <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/rib.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/trim.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/textured.jpg" />

  </Carousel.Item>

</Carousel>
    </div>

<div id="carousel">
<Carousel interval={null}>
<Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/noir.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/black.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/woven.jpg" />
  </Carousel.Item>
</Carousel>

    </div>
    <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/jeans.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/drawcord.jpg" />
  </Carousel.Item>
</Carousel>

    </div>


<div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/anya.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" src="/jusmin.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" src="/malia.jpg" />

  </Carousel.Item>

</Carousel>
    </div>
    <button>Save</button>
    </div>
    </div>
  )
}


export default Casual