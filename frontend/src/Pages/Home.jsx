import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import {toast } from 'react-toastify';
import {Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=  useNavigate()

    const [Data, setData] = useState({TaskName:'', Importance:''})
    const [Tasks, setTasks] = useState([])
    const [SingleTask, setSingleTask] = useState({TaskName:'', Importance:''})

    const handleChange = (e) =>{
        setData({...Data,[e.target.id]:e.target.value})
    }

    const submitHandler=async()=>{
        if(Data.TaskName==='' || Data.Importance==='' ){
           toast.info("Please Add all fields")
        }else{
           const response = await axios.post("http://localhost:5000/api/task/CreateNewTask", Data)
           if(response.data.success===true){
            toast.info(response.data.message)
            // getting updated list of objects
            getAllData()                                                                                                                                                                                                                       
           }else{
            toast.error(response.data.message)
           }
        }
    }


    const getAllData =async ()=>{
        const response = await axios.get("http://localhost:5000/api/task/getAllTasks")
        setTasks(response.data)
    }


    const GetSingleTaskDetails=async(id)=>{
        const response = await axios.get(`http://localhost:5000/api/task/getSingleTask/${id}`)
        console.log(response,"ssss")
        setSingleTask(response.data)
    }


    const DeletSingle=async(id)=>{
        const response = await axios.delete(`http://localhost:5000/api/task/deleteTask/${id}`)
        getAllData()                                                                                                                                                                                                                       
        toast.info("Task Deleted")
    }


    const GotoUpdatePage=(id)=>{
        navigate(`/update/${id}`)
 }


    useEffect(()=>{
        getAllData()
    },[])

  return (
    <div className='Home'>          
        <label htmlFor="TaskName">Enetr TaskName</label>
        <input type="text" name="TaskName" id="TaskName" value={Data.TaskName} onChange={(e)=>handleChange(e)}/>

        <label htmlFor="Importance">Enter its Importance Level</label>
        <select id="Importance" name="Importance" value={Data.Importance}  onChange={(e)=>handleChange(e)}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Very High">Very High</option>
        </select>



        <button className='btn' onClick={submitHandler}>Submit task</button>


        <div className="tasks">
            {Tasks.map((item)=>{
                return(
                    <div key={item._id}>
                    <h3>{item.TaskName}</h3>
                    <p>{item.Importance}</p>
                    <button onClick={()=>GetSingleTaskDetails(item._id)}>Get Single Task</button>
                    <button onClick={()=>DeletSingle(item._id)}>Delet Task</button>
                    <button onClick={()=>GotoUpdatePage(item._id)}>Update Task</button>
                    </div>
                )
            })}
        </div>

<hr />
<hr />
<hr />

        <div className="singleTask">
            <h3>{SingleTask.TaskName}</h3>
            <h4>{SingleTask.Importance}</h4>
        </div>

        <Link to='update'>Update Page</Link>
    </div>
  )
}

export default Home