import { useState} from "react"
import {LoginTasks} from "../redux/uducer"
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { resetmsg } from "../redux/uducer"

const Login = () => {
    const [login, setlogin] = useState({username:"", password:""})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const msg = useSelector(state => state.Login.erreur)
     
    const val = () =>{
          dispatch(LoginTasks({Login: login})).then(res =>{
             if(typeof res.payload === 'object') navigate('/zyada')
           })}
    
    
    return(
       <div className="one"> <br /> <br />
       <h4>{msg}</h4>
       <h1>LOGIN</h1>
         <input type="text" placeholder="Username" onChange={(e) => setlogin({...login, username:e.target.value})} onFocus={()=>dispatch(resetmsg())} /> <br /> <br />
        <input type="password" placeholder="Password" onChange={(e) => setlogin({...login, password:e.target.value})} /> <br /> <br />
        <button className="logino" onClick={() =>val()}>Login</button>
       </div>
    )
}
export default Login
