import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

const Home = () => {
  return (
    <div>
    <div className='container'>
      <h1 className="cover-heading">My Fashion Box</h1>
      </div>
      <ButtonToolbar>
      <Button id= "button" bsStyle="primary" bsSize="large">
     Learn more
      </Button>
      <Button id= "button2" bsStyle="primary" bsSize="large">
     Dress me up
      </Button>
      </ButtonToolbar>
    </div>
  )
}

export default Home
