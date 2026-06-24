//eg for state and props
import React from 'react'
import {useState} from 'react'
//import axios from 'axios'

/*
export default function Task1(){
const [count,setCount]=useState(0)

const increment=()=>{
    setCount(count+1)
}

return(
    <>
    <div>Counter Task: {count}</div>
    <button onClick={increment}>Increment</button>
    </>
)
}*/

/*export default function Task1(){
    const [users,setUsers]=useState([])

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    setUsers(response.data)
});
},[])
return(
<>
<div>Get Users</div>
<ul>
{users.map((user,index)=>{
    return( <li key={index}>
        <b>{user.id}</b>
        <b>{user.email}</b>
        </li>
    )
   
})}
</ul>
</>
)
}*/

export default function Task1(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

    //store in state
    const[user,setUser]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
//create new object for new user
        const newUser={
            username:username,
            password:password
        }
//store in user array
setUser([...user,newUser])

//clear input fields
setUsername("")
setPassword("")
        }
    return(
        <>
        <div>Login Form</div>
        <form onSubmit={handleSubmit}>
        <label>Username:</label>
<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
<label>Password:</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button type="submit">Login</button></form>

<table border="1" cellPadding="10">
    <thead>
<tr>
    <th>S.No</th>
    <th>Username</th>
    <th>Password</th>
</tr>
    </thead>

<tbody>
    {user.map((value,index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{value.username}</td>
                <td>{value.password}</td>
            </tr>
        )
    })}
</tbody>
    </table>
        </>
    )
}
    