import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
// import User from './User'
// import RegistrationForm from './RegistrationForm'
import React,{Component}from 'react'
export default class App extends Component{
  constructor(){
    super()
    console.log("constructor:initiate state and props")
    this.state={
      count:0,
    }
  }
  componentDidMount(){
    console.log("componentDidMount:when Component randerFirst Time")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount:component Removed....")
  }
  render(){
    return(
      <div>
        <h1>count</h1>
       <Counter number={this.state.count}></Counter>
        <button onClick={() => this.setState({count: this.state.count +1})}>click me</button>
        <button onClick={() => this.setState({count: this.state.count -1})}>click me</button>
       
      </div>
      
    )
  }
}



