import {Routes,  Route, BrowserRouter} from "react-router-dom"
import Login from "./login"
import Zayd from "./zyada"
import Signup from "./singnup"



const MyRoute = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Login/>} />
            <Route path = "/zyada" element = {<Zayd/>} />
            <Route path = "/singnup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default MyRoute