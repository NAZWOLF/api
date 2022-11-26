import axios from "axios"
import { useState } from "react"
 


function Signup() {
    const [newuser, setNewuser] = useState({})

    const handelChange=(e) =>{
        setNewuser({...newuser, [e.target.name] :e.target.value})
    }
    const ADDUSER = () =>{
        axios.post("http://localhost:9000/AddUser", newuser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.catch))
    }
    return(
      
          <div className='sancopi'>
            <h1>Sign Up</h1>
            <input type="text" name="name" placeholder='name' onChange={handelChange}/>
            <input type="text" name="prenom" placeholder='prenom' onChange={handelChange} />
            <input type="text" name="email" placeholder=' email' onChange={handelChange}/>
            <input type="username" name="username" placeholder='username' onChange={handelChange}/>
            <input type="password" name="password" placeholder='password' onChange={handelChange}/>
            <button onClick={() => ADDUSER()}>Submit</button>
        </div>

    
    )
}

export default Signup