import {useEffect, useState} from "react"
import {taskspost} from "../redux/reducertask"
import {useDispatch} from "react-redux"
import {logout} from "../redux/uducer"
import {useNavigate} from 'react-router-dom';
import {taskget} from '../redux/reducertask'
function Zayd() {
    const dispatch = useDispatch()
    const Navigation = useNavigate() 
    const user = JSON.parse(localStorage.getItem('user'))

    const deconnect = () =>{
      dispatch(logout())
      Navigation('/login')
       }
       useEffect(() =>{
        dispatch(taskget({id : user._id}))
       },[]
)
   const [tasklist, setTasklist] = useState({name:"", date:"", user:user._id})
    return(<div className="App">
     <div> 
      <h3>name</h3>
       <input type="text" placholder="name" onChange={(e)=> setTasklist({...tasklist, name:e.target.value})} />
    </div>
    <div> 
    <h3>date</h3>
     <input type="date" onChange={(e)=> setTasklist({...tasklist, date:e.target.value})}  />
    </div>
    <button onClick={() => dispatch(taskspost({tasklist: tasklist}))}>ADD</button>
    <button onClick={()=>deconnect()}>sign out</button>
  </div>

    )}

    export default Zayd