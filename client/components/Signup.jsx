import React from 'react'
import { connect } from "react-redux";
import { Button, FormGroup, FormControl, ControlLabel, Form, Col, Checkbox } from "react-bootstrap";
import {registerUser, registerError} from '../actions/register'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm:""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleClick(e){
    const {email, password, confirm} = this.state
    if(password !== confirm){
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      email: email.trim(),
      password: password.trim(),
      confirm: confirm.trim()
    }
    this.props.registerUser(creds)
  }
  
  handleChange(e) {
    this.setState({
      // ...this.state,
      [e.target.name]: e.target.value
    })
  }
  render() {

 
  return (
    <div className='box'>
            <div className="Login">
            <h2>Sign Up </h2>
            <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" name="email" value={email}/>
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" name="password" value={password}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Confirm Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" name="confirm" value={confirm}/>
    </Col>
  </FormGroup>


  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit" onClick={(e)=>this.handleClick(e)}>Sign in</Button>
      <ErrorMessage reducer='auth' />
    </Col>
  </FormGroup>
</Form>
      </div>
     
    </div>
  )
}
 }

const mapDispatchToProps = (dipatch) => {
  return {
    registerUser: (creds) => {
      return dispatchEvent(registerUser(creds))
    },
    registerError: (message) => {
      dispatchEvent(registerError(message))
    }
  }
}


export default connect(null, mapDispatchToProps)(Signup)