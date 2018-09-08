import React from 'react'
import {Carousel, ButtonToolbar,OverlayTrigger, Popover} from 'react-bootstrap'

class Box extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
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
    console.log(this.props)


    return (

      <div name="firstBox" id="carousel">
      <Carousel interval={null}>
        <Carousel.Item>
          <img width={360} height={425} alt="360x425" id={this.props.id1} src={this.props.src1} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={360} height={425} alt="360x425" id={this.props.id2} src={this.props.src2} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={360} height={425} alt="360x425" id={this.props.id3} src={this.props.src3} />  
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
    )
  }
}

export default Box
