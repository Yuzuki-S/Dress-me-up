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

function crossClick(e) {
  e.preventDefault();
//console.log(e.target.name) //logs firstBox
let firstBox = document.getElementsByName(e.target.name)
console.log(firstBox)
let firstBoxDiv = firstBox[0].childNodes[0]
let firstBoxDiv2 = firstBox[0].childNodes[1]
console.log(firstBoxDiv)
firstBoxDiv.style.display = "none";
firstBoxDiv2.style.display = "none";
let nameActive = document.getElementsByClassName('active')

//find element on the page that matches e.target.name

}
class Casual extends React.Component {
 constructor(props){
  super(props)
  this.state = {
    isHidden: false
  }
 }
 render () {
  return (
    <div>
      <div className='box'>
        <h1>Casual Package</h1>
          <div name="firstBox" id="carousel">
            <Carousel interval={null}>
              <Carousel.Item>
                <img width={360} height={425} alt="360x425" id="rib" src="/rib.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={360} height={425} alt="360x425" id="trim" src="/trim.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={360} height={425} alt="360x425" id="textured" src="/textured.jpg" />  
              </Carousel.Item>
            </Carousel>
            <div>
              <ButtonToolbar>
                <OverlayTrigger
                  trigger={['hover', 'focus']}
                  overlay={popoverHoverFocus} >
                    <button name="firstBox" id ="x" onClick={crossClick}>X</button>
                </OverlayTrigger>
              </ButtonToolbar>
            </div>
          </div>
          <div id="carousel">
          <Carousel interval={null}>
            <Carousel.Item>
              <img width={360} height={425} alt="360x425" id="noir"src="/noir.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width={360} height={425} alt="360x425" id="black"src="/black.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width={360} height={425} alt="360x425" id="woven" src="/woven.jpg" />
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
                <img width={360} height={425} alt="360x425" id="jeans" src="/jeans.jpg" />
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
              <img width={360} height={425} alt="360x425" id="anya" src="/anya.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img  id="yuz" width={360} height={425} alt="360x425" id="jusmin" src="/jusmin.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img  id="yuz" width={360} height={425} alt="360x425" id="malia" src="/malia.jpg" />
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
}


export default Casual