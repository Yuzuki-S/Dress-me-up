import React from 'react'
import {Carousel} from 'react-bootstrap'

function handleClick(e) {
  e.preventDefault();
  console.log('The save was clicked.')
}

function Work () {
  return (
    <div>
    <div className='box'>
      <h1>Work Package</h1>
      <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/blue-top.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/shirts.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/silk.jpg" />

  </Carousel.Item>

</Carousel>
    </div>

<div id="carousel">
<Carousel interval={null}>
<Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/ponte.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/slv.jpg" />
  </Carousel.Item>

</Carousel>

    </div>
    <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/slim-cropped-pants.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/skirt.jpg" />
  </Carousel.Item>
</Carousel>

    </div>


<div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" src="/adele.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" src="/kitten.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" src="/loafer.jpg" />

  </Carousel.Item>

</Carousel>
    </div>
    <button onClick={handleClick}>Save</button>
    </div>
    </div>
  )
}

export default Work