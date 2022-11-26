const mongoose = require('mongoose')
const task = mongoose.Schema({
    name : {
        type : String,
        require : true,
        unique : true
    },
    date : {
        type : Date,
        require : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'uniteds',
        require : true
    }
})

const taskModel = mongoose.model("task", task)
module.exports = taskModel