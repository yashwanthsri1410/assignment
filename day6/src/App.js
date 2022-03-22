import React, { Component } from 'react'
import App1 from './App1'
import Change from './Change'
import Employee from './Employee'
import Props from './Props'


class App extends Component {
  state={
    title: 'yashwanth',
    age: 66,
  }


  render() {
    return (
      <div>
        <div>
          <App1 title  =" Vetrimaran " />
          <App1 title  =" Maniratnam  "/>
          <App1 title  =" Anurag Kashyap  "/>
          <App1 title  =" Martin scorsese  "/>
        </div> 
        <div>
         <Change/>
          </div> 
          <div>
            
          <Employee name='yashwanth ' salary={100000}/>
        <Employee name='raj kamal ' salary={70000}/>
       

            </div> 

            <Props title={this.state.title}/>
           
 
      </div>

    )
  }
}

export default App