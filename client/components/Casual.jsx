import React from 'react'
import {Carousel, ButtonToolbar,OverlayTrigger, Popover} from 'react-bootstrap'
import Box from './Box'


function handleClick(e) {
  e.preventDefault();
    let elementArr = document.getElementsByClassName('active')

    let Arr = Array.prototype.slice.call(elementArr);

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
  this.state = {
    isHidden: false
  }
 }
 render () {
  return (
    <div>
      <div className='box'>
        <h1>Casual Package</h1>
        <Box src1 = "/rib.jpg" id1 = "rib" src2= "/trim.jpg" id2="trim" src3="/textured.jpg" id3="textured"/>
        <Box src1 = "/noir.jpg" id1 = "noir" src2= "/black.jpg" id2="black" src3="/woven.jpg" id3="woven"/> 
        <Box src1 = "/jeans.jpg" id1 = "jeans" src2= "/drawcord.jpg" id2="drawcord" src3="/white.jpg" id3="white"/>   
        <Box src1 = "/anya.jpg" id1 = "anya" src2= "/jusmin.jpg" id2="jusmin" src3="/malia.jpg" id3="malia"/>
        <button onClick={handleClick}>Save</button>   
      </div>
    </div>
)
}
}


export default Casual