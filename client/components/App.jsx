import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Navy from './Navy'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Signup from './Signup'
import Package from './Package'
import Sports from './Sports'
import Work from './Work'
import Casual from './Casual'
import Confirmed from './Confirmed'
import Saved from './Saved'
import Confirmedlogin from './Confirmedlogin'
import Confirmedsignin from './Confirmedsignin'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // handleClick = () => {
  //   console.log('this is:', this);
  // }
  render() {
    return (
      <Router>
        <div id='app'>
          <Route path='/' component={Navy} />
          <Route exact path='/' component={Home} /> 
          <Route exact path='/Home' component={Home} /> 
          <div id="bodyThing" className='col-lg-8'>
            <Route path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Package' component={Package} />
            <Route exact path='/Package/sports' component={Sports} />
            <Route exact path='/Package/casual' component={Casual} />
            <Route exact path='/Package/work' component={Work} />
            <Route exact path='/Contact/confirmed' component={Confirmed} />
            <Route exact path='/Package/casual/saved' component={Saved} />
            <Route exact path='/Package/sports/saved' component={Saved} />
            <Route exact path='/Package/work/saved' component={Saved} />
            <Route exact path='/Login/loggedin' component={Confirmedlogin} />
            <Route exact path='/Signup/signedup' component={Confirmedsignin} />
          </div>

        </div>
      </Router>
    )
  }
}

export default App
