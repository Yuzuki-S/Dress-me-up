import React from 'react'
import {Carousel, ButtonToolbar,OverlayTrigger, Popover} from 'react-bootstrap'

function handleClick(e) {
  e.preventDefault();
  let elementArr = document.getElementsByClassName('active')
  console.log(elementArr);
  let Arr = Array.prototype.slice.call(elementArr);
  console.log(Arr);
  for (var i = 0; i < Arr.length; i++) {
    Arr.splice(i , 1);
  }
  
  
  for(let i = 0; i < Arr.length; i++){
    console.log(Arr[i].childNodes[0].id)
  }
}

const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus">
    <strong>Remove the item</strong> 
  </Popover>
);

function Sports () {
  return (
    <div>
    <div className='box'>
      <h1>Sporty Package</h1>

          <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="puffer"  src="/puffer.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="hoodie" src="/hoodie.jpg" />

  </Carousel.Item>

</Carousel>
<div>
              <ButtonToolbar>
              <OverlayTrigger
                trigger={['hover', 'focus']}
                overlay={popoverHoverFocus} >
            <button id ="x">X</button>
            </OverlayTrigger>
            </ButtonToolbar>
            </div>
    </div>

<div id="carousel">
<Carousel interval={null}>
<Carousel.Item>
    <img width={360} height={425} alt="360x425" id="linen" src="/linen.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="crew" src="/crew.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="green" src="/green.jpg" />
  </Carousel.Item>
</Carousel>
<div>
              <ButtonToolbar>
              <OverlayTrigger
                trigger={['hover', 'focus']}
                overlay={popoverHoverFocus} >
            <button id ="x">X</button>
            </OverlayTrigger>
            </ButtonToolbar>
            </div>
    </div>
    <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="jersey" src="/jersey.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="drawcord" src="/drawcord.jpg" />
  </Carousel.Item>
</Carousel>
<div>
              <ButtonToolbar>
              <OverlayTrigger
                trigger={['hover', 'focus']}
                overlay={popoverHoverFocus} >
            <button id ="x">X</button>
            </OverlayTrigger>
            </ButtonToolbar>
            </div>
    </div>


<div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="leon" src="/leon.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425}  alt="360x425" id="lola" src="/lola.jpg" />

  </Carousel.Item>

</Carousel>
<div>
              <ButtonToolbar>
              <OverlayTrigger
                trigger={['hover', 'focus']}
                overlay={popoverHoverFocus} >
            <button id ="x">X</button>
            </OverlayTrigger>
            </ButtonToolbar>
            </div>
    </div>
          <button onClick={handleClick}>Save</button>
    </div>
    </div>
  )
}

export default Sports