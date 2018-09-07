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
    </div>
  )
}

export default Home
