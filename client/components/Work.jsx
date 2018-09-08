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
)


function Work () {
  return (
    <div>
    <div className='box'>
      <h1>Work Package</h1>
      <div id="carousel">
<Carousel interval={null}>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="blue-top" src="/blue-top.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="shirts" src="/shirts.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="silk" src="/silk.jpg" />

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
    <img width={360} height={425} alt="360x425" id="ponte" src="/ponte.jpg" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="slv" src="/slv.jpg" />
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
    <img width={360} height={425} alt="360x425" id="slim-cropped-pants" src="/slim-cropped-pants.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img width={360} height={425} alt="360x425" id="skirt" src="/skirt.jpg" />
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
    <img width={360} height={425} alt="360x425" id="adele" src="/adele.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" id="kitten" src="/kitten.jpg" />

  </Carousel.Item>
  <Carousel.Item>
    <img  id="yuz" width={360} height={425} alt="360x425" id="loafer" src="/loafer.jpg" />

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

export default Work