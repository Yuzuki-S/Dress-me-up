import React from 'react'
import {Carousel} from 'react-bootstrap'
import ReactDOM from 'react-dom';

function handleClick(e) {
  e.preventDefault();
  console.log('The save was clicked.')
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


class Casual extends React.Component {
 constructor(props){
 super(props)
 this.state = {}
 }
 render () {
  return (
    <div>
      <div className='box'>
        <h1>Casual Package</h1>
          <div id="carousel">
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
          </div>
          <button onClick={handleClick}>Save</button>   
      </div>
    </div>
)
}
}


export default Casual