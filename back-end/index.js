const express = require("express")
const cors = require("cors")
/*const TasksRouter = require("./Routes/tasks")*/
const UserRouter = require("./routes/user")
const { mongoose } = require("mongoose")
const taskRouter = require("./routes/ntask")


const app = express()
app.use(cors())
app.use(express.json())
const port = 9000
mongoose.connect("mongodb://localhost/todos")
 

app.listen(port, () => console.log("app is running on port 9000"))
app.use(taskRouter)
app.use(UserRouter)
 
 
