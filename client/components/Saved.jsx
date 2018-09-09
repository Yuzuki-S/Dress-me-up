import React from 'react'


class Saved extends React.Component {
  constructor(props){
    super(props)
  }

  

render () {
  return (
    <div className= 'box'>
    <h2>Saved items</h2>
    <ul>
      <li>
        {console.log("Hi")}
        {console.log(this.props)}
      </li>
    </ul>
    </div>
  )
}
}


export default Saved