import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='container'>
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Home' component={Home} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Login' component={Login} />
            <Route path='/Signup' component={Signup} />
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
