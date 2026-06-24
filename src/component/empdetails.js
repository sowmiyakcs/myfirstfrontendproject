import React, { Component } from 'react'
import axios from 'axios'

export class Userdetails extends Component {
    constructor() {
        super()

        this.state = {
            details: []
        }
    }

    componentDidMount = () => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                this.setState({ details: res.data })
            })
    }

    render() {
        const { details } = this.state
        console.log(details)
        return (
            <>
                <h1>User Details</h1>

                <ul className="userdetails-json">
                    {details.map((value, index) => {
                        return (
                          
                            <li key={index}>
                                <b>ID :</b> {value.id}
                                <b>Name :</b> {value.name}
                                <b>Email :</b> {value.email}  
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default Userdetails