import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8081/getUsers1')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='h-screen bg-gradient-to-b from-black to-black '>
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3 className='text-[#00df9a]'>Users List</h3>
      </div>
    
      <Link to="/dashboard" className='btn btn-success '>Back to dashboard</Link>
  
      
      <Link to="/create" className='btn btn-success ml-[1100px]'>Add Users</Link>
      
      

      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr className='text-white'>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {data.map((user, index) => {
              return <tr key={index}>
                  <td>{user.name}</td>
                  <td>{
                    <img src={`http://localhost:8081/images/`+user.image} alt="" className='w-[50px] h-[50px] rounded-full'/>
                    }</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <Link to={`/userEdit/`+user.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={e => handleDelete(user.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default User;