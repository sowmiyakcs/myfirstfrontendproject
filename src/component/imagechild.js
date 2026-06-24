import React, { Component } from 'react'

export class imagechild extends Component {
  render() {
    return (
        <>
     <h2>Child component {this.props.data.name}</h2>
        <button onClick={this.props.updating}>updatePhoto through child</button>
     </>
    )
  }
}

export default imagechild