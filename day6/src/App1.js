import React, { Component } from 'react'
import './App.css';

export class App1 extends Component {
  state={
    count: 0,}

    handlevote = () =>{
      this.setState({count:this.state.count+1})
    }
    

  
  render() {
    return (
      
      <div>
        <div class="card">
         <div className='move'>voting</div>
          <div className='move1' >{this.props.title}{this.state.count}
          <button  onClick={this.handlevote}
          >vote</button></div>
        </div> 
      </div>
     
    ) 
  }
}

export default App1;