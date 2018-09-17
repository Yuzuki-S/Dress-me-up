import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Form, Col, Checkbox } from "react-bootstrap";
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit() {
  console.log('clicked')
  let thisUser = document.getElementById("email").value
  let thisPassword = document.getElementById("password").value
    
  request.post('/register')
  .send({ email: thisUser, password: thisPassword })
  .then(() => {
   console.log('send')  
   
   })
   .catch((err) => {
    console.log('error', err)
   })
  }

  render() {

 
  return (
    <div className='box'>
            <div className="Login">
            <h2>Log in </h2>
  <form horizontal  onSubmit={this.handleSubmit()}>
  <FormGroup controlId="formHorizontalEmail" >
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl componentClass= "input" id ="email" name ="email" type="email" placeholder="Email"/>
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl componentClass= "input"  id="password" name ="password" type="password" placeholder="Password"/>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>
  <Link to= '/Login/loggedin'>

  <FormGroup>
    <Col smOffset={2} sm={10}>
         <Button type="submit" value="submit"> Log in</Button>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} sm={10}>
         <Button type="submit">Log out</Button>
    </Col>
  </FormGroup>
  </Link>
</form>
      </div>
     
    </div>
  )
}
 }

export default Login