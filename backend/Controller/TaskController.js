const TasksModel =  require('../Schema/TaskSchema')

const getAllTask = async(req, res) =>{
    try{
        const getAllTasks = await TasksModel.find()
        res.send(getAllTasks)

    }catch(error){
        res.send("no task found")

    }
}



const getSingleTask = async(req, res) =>{
    try{  
        const {id} = req.params
        console.log(req.params)
        const getSingleTask = await TasksModel.findOne({_id:id})
        res.send(getSingleTask)

    }catch(error){
        res.send("no task found")
    }
}





const createNewTask = async (req, res) =>{
    try{
        const {TaskName, Importance} =  req.body
        const newTask = await TasksModel.create({
            TaskName:TaskName,
            Importance:Importance
        })

        res.send({newTask, success:true, message:"Task Added"})                                         
    }catch(error){
        res.send({success:false, message:"Task Not Added"})
    }
} 


















const deleteTask =async (req, res) =>{
   try{
    const {id} = req.params
    console.log(req.params)
    const deletedTask = await TasksModel.findByIdAndDelete({_id:id})

    if(deletedTask){
        res.send({status:"Task deleted", TaskDeleted:deletedTask})
    }else{
        res.send({status:"Task Not  deleted", message:"No task with this id found"})
    }


   }catch(error){
    res.send({status:"Task Not  deleted", message:"some thing went wrong"})
   }
}





const updateTask =async (req, res) =>{
    console.log(req.body)
    try{
        const {id} = req.params
        const Data =  req.body
        const updateduserData = await TasksModel.findOneAndUpdate({_id:id} ,Data,{ new: true})
    
        if(updateduserData){
            res.send({status:"Task updated", updateduserData:updateduserData})
        }else{
            res.send({status:"Task Not  updated", message:"No task with this id found"})
        }
    
    
       }catch(error){
        res.send({status:"Task Not  updated", message:"some thing went wrong"})
       }
}






module.exports = {getAllTask, getSingleTask, deleteTask, updateTask, createNewTask}