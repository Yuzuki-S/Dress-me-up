import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div> 
   <video autoPlay muted loop id="myVideo">
  <source src="video.m4v" type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>

      <div className='container'>   
      <h1 className="cover-heading">Dress Me Up</h1>
      <div id="buttonsMain">
        <ButtonToolbar>
          <Link id = "list" to = "/About">
            <Button id= "button" bsStyle="primary" bsSize="large">
              Learn more
            </Button>
          </Link>
          
          <Link id = "list" to = "/Package">
            <Button id= "button2" bsStyle="primary" bsSize="large">
              Order now
            </Button>
          </Link>
          
        </ButtonToolbar>
      </div>
   </div>  </div>
  )
}

export default Home
