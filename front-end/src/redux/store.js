import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "./reducer"
import LoginSlice from "./uducer"
import  taskSlice  from "./reducertask";
const Store = configureStore({
    reducer:{
        tasks : TasksReducer,
        Login : LoginSlice,
        Task : taskSlice
    }
})

export default Store