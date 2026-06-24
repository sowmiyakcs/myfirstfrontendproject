import React, { useState } from 'react'
//import CustomerView from './customerView'
import { useDispatch } from 'react-redux'
import {addCustomer} from './slices/customerSlice'

export default function CustomerAdd() {
     const [input,setInput]=useState("")
     //const [customer , setCustomer]=useState([])
  const dispatch=useDispatch()

     const addCustomer=(e)=>{
        //e.preventDefault();
        if(input){
            dispatch(addCustomer)
        }
     }
     return (
   <>
   <h2>Customer Details</h2>
   <form>
    <label>Customer Name</label>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
   <div>
     <button onClick={addCustomer}> Add</button>
     </div>
   </form>
   </>
  )
}