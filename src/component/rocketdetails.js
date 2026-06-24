import React, { Component } from 'react'
import axios from 'axios'

export class rocketdetails extends Component {
    constructor(){
        super()
        this.state={
            details:[]
        }
    }
    componentDidMount=()=>{
        axios("https://api.spacexdata.com/v3/launches").then((res)=>{
            this.setState({details:res.data})
        })
    }
  render() {
    const {details}=this.state
    console.log(details)
    return (
     <h1>Rocket Details</h1>
    )
  }
}

export default rocketdetails