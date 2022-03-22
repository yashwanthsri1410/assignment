import React, { Component } from 'react'
import './App.css'


class Props extends Component{
    
    render(){
        return(
            <div> 
               <h2> {this.props.title}</h2>
                
            </div>
        )
    }
}
export default Props;