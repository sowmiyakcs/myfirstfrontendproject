import React, { Component } from 'react'
import Imagechild from "./imagechild.js";
import img1 from './sea-nature.jpg';
import img2 from './cloud-nature.jpg';

export class image extends Component {
 constructor(props) {
        super(props);
        this.state={
            name:"Cloud",
            photo:img1
        };
    }
changeImage =() => {
    this.setState({photo:img2})
}
  render() {
    return (
<>
  <h1>Header Component</h1>

         <h1>Header Component</h1>

        <h2>{this.state.name}</h2>

        <img src={this.state.photo} alt="cloud" width={500} height={500} style={{cursor: 'pointer'}}/>
        <br/>
        <button onClick={this.changeImage}>Change</button>
        <Imagechild data={this.state} updating={this.changeImage}></Imagechild>

</>
    )
  }
}

export default image
