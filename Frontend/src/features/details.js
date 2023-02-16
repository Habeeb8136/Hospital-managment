import { createSlice } from "@reduxjs/toolkit";

const initialState={
    department:[],
    employee:[],
}

const detailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        updateDepartment(state,action){
            state.department=action.payload
            console.log(action.payload)
        },
        updateEmployee(state,action){
            state.employee=action.payload
            console.log(action.payload)
        }
    }
})

export const {updateDepartment,updateEmployee} = detailsSlice.actions;
export default detailsSlice.reducer;