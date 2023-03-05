import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import {toast } from 'react-toastify';
import {Link } from 'react-router-dom';  
import { useLocation } from 'react-router-dom';
const Update = () => {
  const [Data, setData] = useState({TaskName:'', Importance:''})
  
  const handleChange = (e) =>{
    setData({...Data,[e.target.id]:e.target.value})
}
  const location = useLocation()  
  const id = location.pathname.substring(location.pathname.lastIndexOf('/')+1)



  const UpdateTask =async ()=>{
    const response = await axios.patch(`http://localhost:5000/api/task/updateTask/${id}`,Data)
    console.log(response.data)
    toast.info(response.data.status)
  }



  return(
    <div>
      <h1>Update Task</h1>
    <Link to='/'>Home Page</Link>

    <div className='Update'>          
        <label htmlFor="TaskName">Enetr TaskName</label>
        <input type="text" name="TaskName" id="TaskName" value={Data.TaskName} onChange={(e)=>handleChange(e)}/>

        <label htmlFor="Importance">Enter its Importance Level</label>
        <select id="Importance" name="Importance" value={Data.Importance}  onChange={(e)=>handleChange(e)}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Very High">Very High</option>
        </select>
        </div>




        <button onClick={UpdateTask}>Update This</button>
    </div>

  )


}

export default Update