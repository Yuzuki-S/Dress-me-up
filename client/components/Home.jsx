import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='container'>
      <h1 className="cover-heading">Dress Me Up</h1>
      </div>
      <div id="buttonsMain">
      <ButtonToolbar>
      <Button id= "button" bsStyle="primary" bsSize="large">
        <Link id = "list" to = "/About">Learn more</Link>
      </Button>
      <Button id= "button2" bsStyle="primary" bsSize="large">
      <Link id = "list" to = "/Package">Dress me up </Link>
      </Button>
      </ButtonToolbar></div>
    </div>
  )
}

export default Home
