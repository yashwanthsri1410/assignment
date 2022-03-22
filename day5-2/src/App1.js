import React, { Component } from 'react';
import'./App.css';

 class App1 extends Component {
  render() {
    return (
      <div>
        <div className='header'>WELCOME!</div>
      
      <div className='move'>
        <h2>ALREADY REGISTERED?</h2>
        <h2>NEW CUSTOMER?</h2>
        </div>
        <br/>
        <br/>

        <div className='move1-1'>
        <input className='move1' placeholder='Email address'></input>
        <input className='move3' placeholder='Email address'></input>
        </div>
    
        <br/>
        <input className=' move1' placeholder='Password'></input>
        <input className=' move3' placeholder='Password'></input>
        <br/>
        <label className='move5'>I forgot Password</label>
        <br/> <br/>
        <button className='move2'>CREATE ACCOUNT</button>
        <button className='move4'>SIGN IN </button>
        <br/>
        <label class="container">Remember<input type="radio" name="radio" checked></input>
        
        <div class="check"></div>
        </label>

     

      <div></div> 
      </div>
   
    )
  }
}

export default App1;