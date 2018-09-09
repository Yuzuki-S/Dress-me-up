import React from 'react'


class Saved extends React.Component {
  constructor(props){
    super(props)
  }


render () {
  console.log(this.props.location.state.savedValues)
  return (
   
    <div className= 'box'>
    <h2>Saved items</h2>
    <ul>
    
     { 
       this.props.location.state.savedValues.map( item =>

        <div id="savedItems"><img width={250} height={350} alt="360x425" id={item} src={"/" + item + ".jpg"} /></div>
        
      )
     }
    </ul>
    <p id="ThankyouSaved" >Thank you for your order </p>
    </div>
  )
}
}


export default Saved