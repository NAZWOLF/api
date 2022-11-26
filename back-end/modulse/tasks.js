const mongoose = require("mongoose")



const Tasks = mongoose.Schema({
    title: {
        type : string ,
        required : true,

    },
    user: {
        type : string ,
        required : true,
    }
})
const TasksModel = mongoose.model("Tasks", Tasks)
module.exports = userModel