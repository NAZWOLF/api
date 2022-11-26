import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const taskspost = createAsyncThunk("Login/Taskspost", async ({tasklist}) =>{
    return axios.post("http://localhost:9000/Tasksadd",tasklist)
    .then(res=>{return res.data })
    .catch(err=> {return err.data.message})
})

export const taskget = createAsyncThunk("Login/Tasksget", async ({id})=>{
    return axios.get(`http://localhost:9000/Taskimport/${id}` )
    .then(res=>{return res.data })
    .catch(err=> {return err.data.message})
})
const taskSlice = createSlice({
    name : "Task",
    initialState : {
        taskinfo:[],
        status:"",
        erreur:""
    },
    reducers : {},
    extraReducers:{
        [taskspost.fulfilled] : (state,action) =>{
            state.taskinfo= action.payload
            state.status = "success"
        },
        [taskspost.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "rejected"
        },
        [taskspost.pending] : (state)=>{
            state.status = "pending"
        },
        [taskget.fulfilled] : (state,action) =>{
            state.taskinfo= action.payload
            state.status = "success"
        },
        [taskget.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "rejected"
        },
        [taskget.pending] : (state)=>{
            state.status = "pending"
        }
    },
})
export default taskSlice.reducer
