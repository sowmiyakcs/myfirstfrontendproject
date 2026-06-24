import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Empty() {

const[users,setUsers]=useState([])  

useEffect(()=>{

axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
setUsers(response.data)

})
})


  return (
    <>
    <div>getting USer</div>
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
}
