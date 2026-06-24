import React from 'react'
import { useState } from 'react'

export default function LoginForm() {

  // initial stage is empty for both username and password
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  // Store All Users
  const [users, setUsers] = useState([])

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add New User
    setUsers([...users, formData])
    // Clear Input Fields
    setFormData({
      username: "",
      password: ""
    })
  }

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username"  value={formData.username} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password}  onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {/* Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (

              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
