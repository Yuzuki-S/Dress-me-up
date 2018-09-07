import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
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

class App extends React.Component {
  constructor(props){
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


                <div id="bodyThing"className='col-lg-8'>
                  <Route exact path='/' component={Home} />
                  <Route path='/About' component={About} />
                  <Route path='/Home' component={Home} />
                  <Route path='/Contact' component={Contact} />
                  <Route path='/Login' component={Login} />
                  <Route path='/Signup' component={Signup} />
                  <Route exact path='/Package' component={Package} />
                  <Route exact path='/Package/sports' component={Sports} />
                  <Route exact path='/Package/casual' component={Casual} />
                  <Route exact path='/Package/work' component={Work} />
                  
                </div>

        </div>
      </Router>
    )
  }
}

export default App
