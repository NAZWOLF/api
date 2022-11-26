import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const LoginTasks = createAsyncThunk("Login/LoginTasks", async ({Login}) =>{
    return axios.post("http://localhost:9000/Login",Login)
    .then(res=>{return res.data })
    .catch(err=> {return err.data.message})
})

const LoginSlice = createSlice({
    name : "Login",
    initialState : {
        userinfo:{},
        status:"",
        erreur:""
    },
    reducers : {
         resetmsg  (state)  {
            state.erreur = ""
        },
         logout  (state)  {
            localStorage.removeItem('user')
            localStorage.clear()
            state.userinfo = {}
            state.erreur = ""
         }
    },
    extraReducers:{
        [LoginTasks.fulfilled] : (state,action) =>{
            if(typeof action.payload === 'string'){
                state.erreur = action.payload
            }else{
                state.userinfo = action.payload
                window.localStorage.setItem('user', JSON.stringify(action.payload))
            }
          
        
        },
        [LoginTasks.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "rejected"
        },
        [LoginTasks.pending] : (state)=>{
            state.status = "pending"
        }
    },
})
export default LoginSlice.reducer
export const {resetmsg, logout} = LoginSlice.actions