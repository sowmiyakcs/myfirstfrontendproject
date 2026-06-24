import { createSlice } from "@reduxjs/toolkit";
   const initialState=[]
export const customerSlice = createSlice({
 
    name:"customerTest",
    initialState:initialState,
    reducers:{
        addCustomers(state,actions){    //state - array , actions   - user data
            state.push(actions.payload)
        }
    }
})

export const {addCustomers} = customerSlice.actions    //actionCreator
export default customerSlice.reducer