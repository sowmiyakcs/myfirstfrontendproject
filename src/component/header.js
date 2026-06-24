import React, { Component } from 'react'
import Image from './sea-nature.jpg';
import Cloud from './cloud-nature.jpg';

export class header extends Component { 
    constructor(props) {
        super(props);
        this.state={
            name:"sowmiya",
            address:"chennai",
            seaimg:Image,
            cloudimg:Cloud
        };
    
    }

    changeAddress = () => {
        this.setState({ address: "covai" });
    }
    changeImage =() => {
        this.setState({seaimg:this.state.cloudimg})
    }

  render() {
    return (
   <>
   <div className="image-sec">
    <img src={this.state.seaimg} alt="sea" width="300"/>
   </div>
   <h3>My name is: {this.state.name}</h3>
   <p>Address: {this.state.address}</p>
   <button onClick={this.changeAddress}>Change Address</button>
   <button onClick={this.changeImage}>Change Image</button>
   </>
    )
  }
}

export default header