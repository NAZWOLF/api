const  {Router} = require("express")
const taskModel = require("../modulse/ntasks")
const router = Router()

router.post('/Tasksadd', async (req,res) =>{
    const listtask = req.body
    console.log(listtask)
    try{
        let result = await taskModel.InsertOne(listtask)
        res.send(result)
    }catch(err){console.log(err.message)}
})

router.get('/Taskimport/:iduser' , async (req,res) =>{
    const id = req.params.iduser
    try{
        let result = await taskModel.find({_id : id})
        res.send(result)
    }catch(err){console.log(err.message)}
})
module.exports = router