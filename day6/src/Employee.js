import React, { Component } from 'react'
import './App.css'

export class Employee extends Component {
  render() {
    return (
      <div> 
          Name={this.props.name}and salary is {this.props.salary}
      </div>
    )
  }
}

export default Employee;