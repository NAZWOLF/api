const {Router} = require("express")
const UserModel = require("../modulse/user")
const router = Router()


router.post('/Login', async (req,res) =>{
    const login = req.body
   try{
    let resultlogin = await UserModel.findOne({username : login.username})
    if(resultlogin) {
        res.send(resultlogin)
        console.log("authentification a reusssi")
    }else{
        res.send("failed")
        console.log("failed")
    }
}catch(err){console.log(err.message)}
})

router.post("/AddUser", async (req,res) =>{
    const user = req.body

    
    try{
        let result = await UserModel.findOne({name : user.name})
        if(result){
            res.send("utilisateur existe deja dans la base de donne")

        }else{
            const newuser = new UserModel(user)
            const saved = await newuser.save()
            if(saved) res.send("user inserted")
            else res.send("not inserted")
        }

    }catch(err){console.log(err.message)} 
        })

    module.exports = router