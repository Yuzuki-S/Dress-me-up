import React from 'react'
import {Grid, Row, Col, Thumbnail,
Carousel


} from 'react-bootstrap'

function Sports () {
  return (
    <div>
    <div className='box'>
      <h1>Sporty Package</h1>

          <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/puffer.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/hoodie.jpg" />

  </Carousel.Item>

</Carousel>
    </div>

<div id="carousel">
<Carousel interval={null}>
<Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/linen.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/crew.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/green.jpg" />
  </Carousel.Item>
</Carousel>

    </div>
    <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/jersey.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/drawcord.jpg" />
  </Carousel.Item>
</Carousel>

    </div>


<div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/leon.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" src="/lola.jpg" />

  </Carousel.Item>

</Carousel>
    </div>
    {/* <form name="shoeForm">
      <select>
        <option name="shoes" type="dropdown">black shoes</option>
        <option name="shoes" type="dropdown">purple shoes</option>
        <option name="shoes" type="dropdown">high heels shoes</option>
        </select>
      </form> */}
          <button>Save</button>
    </div>
    </div>
  )
}

export default Sports