const  {Router} = require("express")

const router = Router()

let tasks = [
    { 
     title : "coding",
     user : "Moha"
     },
 
     {
         title : "reading",
         user : "Stephan"
     },
 
     {
         title : "playing",
         user : "Joseph"
     }
 
 ]
 
 router.get("/tasks", (req,res)=>{
     res.send(tasks)
 })
 
 router.post("/addtasks", (req,res)=>{
  const title = req.body.title
  const user = req.body.user 
 
  tasks.push({title : title , user : user})
  res.send(tasks)
 })
 
 router.delete("/deletetasks/title/:title", (req,res)=>{
     const DellTasks  = req.params.title
    
     tasks = tasks.filter(item => item.title !== DellTasks)
 
    
     res.send(tasks)
 })

 module.exports = router