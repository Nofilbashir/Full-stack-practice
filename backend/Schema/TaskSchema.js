const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    TaskName:{
        type:String,
    },
    Importance:{
        type:String,
    }
}
)


module.exports = mongoose.model('TasksModel', TaskSchema)