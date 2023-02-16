import {createSlice} from "@reduxjs/toolkit"

const initialState={
    loggedIn:false
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser(state,action){
            state.loggedIn=action.payload
        },

        logoutUser(state,action){
            state.loggedIn=action.payload
        }
    }
})

export const {loginUser,logoutUser}= userSlice.actions;
export default userSlice.reducer;