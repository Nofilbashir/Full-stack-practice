const express  = require('express')
const router  =express.Router()
const {getAllTask, getSingleTask, deleteTask, updateTask, createNewTask}= require( '../Controller/TaskController')


router.get('/getAllTasks', getAllTask)

router.get('/getSingleTask/:id',getSingleTask)


router.post('/CreateNewTask',createNewTask)

router.delete('/deleteTask/:id',deleteTask)

router.patch('/updateTask/:id',updateTask)

module.exports = router