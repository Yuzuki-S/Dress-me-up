import React from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../actions/login'
import ErrorMessage from './ErrorMessage'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      // ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds)
  }

  render () {
    return (
      <div>
        <p><input name='username'
          placeholder='Username'
          onChange={this.handleChange} /></p>
        <p><input type='password' name='password'
          placeholder='Password'
          onChange={this.handleChange} /></p>
        <button onClick={this.handleClick}>Login</button>
        <ErrorMessage reducer='auth' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)

// import React from 'react'
// import { Button, FormGroup, FormControl, ControlLabel, Form, Col, Checkbox } from "react-bootstrap";
// import {Link} from 'react-router-dom'

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     }
//   }

//   render() {

 
//   return (
//     <div className='box'>
//             <div className="Login">
//             <h2>Log in </h2>
//             <Form horizontal>
//   <FormGroup controlId="formHorizontalEmail">
//     <Col componentClass={ControlLabel} sm={2}>
//       Email
//     </Col>
//     <Col sm={10}>
//       <FormControl type="email" placeholder="Email" />
//     </Col>
//   </FormGroup>

//   <FormGroup controlId="formHorizontalPassword">
//     <Col componentClass={ControlLabel} sm={2}>
//       Password
//     </Col>
//     <Col sm={10}>
//       <FormControl type="password" placeholder="Password" />
//     </Col>
//   </FormGroup>

//   <FormGroup>
//     <Col smOffset={2} sm={10}>
//       <Checkbox>Remember me</Checkbox>
//     </Col>
//   </FormGroup>
//   <Link to= '/Login/loggedin'>

//   <FormGroup>
//     <Col smOffset={2} sm={10}>
//          <Button type="submit">Log in</Button>
//     </Col>
//   </FormGroup>
//   </Link>
// </Form>
//       </div>
     
//     </div>
//   )
// }
//  }

// export default Login