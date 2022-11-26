import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getTasks = createAsyncThunk("Tasks/getTasks", async () => {
    return axios.get("http://localhost:9000/tasks")
    .then(res=>{return res.data})
    .catch(err => console.log(err.message))
}) 
export const AddTasks = createAsyncThunk('Tasks/AddTasks', async ({task}) => {
    return axios.post('http://localhost:9000/addtasks', task)
    .then(res=>{return res.data})
    .catch(err=> console.log(err.data.message))
})
export const DeleteTasks = createAsyncThunk("Tasks/DeleteTasks", async ({title}) => {
    return axios.delete(`http://localhost:9000/deletetasks/title/${title}`)
    .then(res=>{return res.data})
    .catch(err=>console.log(err.data.message))
})

const TasksSlice = createSlice({
    name : "Moha",
    initialState : {
        list:[],
        status:"",
        Erreur:""
    },
    reducers : {},
    extraReducers:{
        [getTasks.fulfilled] : (state,action) =>{
            state.list = action.payload
            state.status = "success"
        },
        [getTasks.rejected] : (state) =>{
            state.status = "rejected"
        },
        [getTasks.pending] : (state)=>{
            state.pendeng = "pendeng"
        },
        [ AddTasks.fulfilled] : (state,action) =>{
            state.list = action.payload
            state.status = "success"
        },
        [ AddTasks.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "rejected"
        },
        [ AddTasks.pending] : (state)=>{
            state.pendeng = "pendeng"
        },
        [ DeleteTasks.fulfilled] : (state,action) =>{
            state.list = action.payload
            state.status = "success"
        },
        [ DeleteTasks.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "rejected"
        },
        [ DeleteTasks.pending] : (state)=>{
            state.pendeng = "pendeng"
        },
      
    }
})

export default TasksSlice.reducer