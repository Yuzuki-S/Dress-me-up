import React from 'react'
import {Carousel, ButtonToolbar,OverlayTrigger, Popover} from 'react-bootstrap'
import Box from './Box'
import {Link} from 'react-router-dom'

let savedItems = [];

function handleClick(e) {
  if(savedItems.length >0) {
    savedItems = []
  }
  let elementArr = document.getElementsByClassName('active')

  let Arr = Array.prototype.slice.call(elementArr);

  for (var i = 0; i < Arr.length; i++) {
    Arr.splice(i , 1);
  }

  
  for(let i = 0; i < Arr.length; i++){
    savedItems.push(Arr[i].childNodes[0].id)
  }

}


function Work () {
  return (
    <div>
      <div className='box'>
        <h1>Work Package</h1>
        <Box src1="/blue-top.jpg"  id1="blue-top" src2="/shirts.jpg" id2="shirts" src3="/silk.jpg" id3="silk"/>
        <Box src1="/ponte.jpg"  id1="ponte" src2="/slv.jpg" id2="slv" src3="/utility.jpg" id3="utility"/>
        <Box src1="/slim-cropped-pants.jpg"  id1="slim-cropped-pants" src2="/skirt.jpg" id2="skirt" src3="/wide.jpg" id3="wide" />
        <Box src1="/adele.jpg"  id1="adele" src2="/kitten.jpg" id2="kitten" src3="/loafer.jpg" id3="loafer" />
        <div>
        <button id ="add"  onClick={handleClick}>+Add</button>
        </div>
        <Link to={{pathname: '/Package/work/saved', state: {savedValues: savedItems}}} onClick={handleClick}>
          <button id ="save">Save</button>
        </Link>
      </div>
    </div>
  )
}

export default Work