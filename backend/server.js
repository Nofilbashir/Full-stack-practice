const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv').config()
const PORT  = process.env.PORT || 8000

const connectDB  = require('./DB/DB')


const TaskRouter =  require('./routes/TasksRoutes')
const testRoutes =  require('./routes/testRoutes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use('/api/task',TaskRouter)
app.use('/api/user', testRoutes)





const start = async()=>{
    await connectDB().then(()=>{
        app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}`)
        })
    })
}


start()
