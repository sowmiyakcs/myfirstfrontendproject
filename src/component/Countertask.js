import React from 'react'
import { useState } from 'react'

export default function Countertask() {
const [count, setCount]=useState(0)
const increment=()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
}
  return (
    <>
    <div>countertask</div>
<button onClick={increment}>INC+</button>
<p>{count}</p>
<button onClick={decrement}>DEC-</button>
<p>clicked {count} times</p>
    </>
  )
}
