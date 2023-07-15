import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
function Driver() {

    const [data, setData] = useState([])
    useEffect(()=> {
     axios.get('http://localhost:8081/getDriver')
     .then(res => {
        if(res.data.Status === "Success") {
            console.log(res.data.Result)
            setData(res.data.Result);
        } else {
            alert("Error")
        }
     })
     .catch(err => console.log(err))
    },[])
    return(
        
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center'>
                <h3>Drivers List</h3>
            </div>

            <Link to="/dashboard" className='btn btn-success '>Back to dashboard</Link>
            <Link to ='/adddriver' className='btn btn-success'>Add Driver</Link>
           
            <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>email</th>
                        <th>busid</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((driver, index) => {
                       return <tr key={index}>
                            <td>{driver.name}</td>
                            <td>{
                                <img src = {`http://localhost:8081/images/`+driver.image} alt="" className='w-[50px] h-[50px] rounded-full'/>
                                }</td>
                            <td>{driver.email}</td>
                            <td>{driver.busid}</td>
                            <td>
                                <Link to={`/driverEdit/`+driver.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                                <button className='btn btn-sm btn-danger'>delete</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
            </div>

        </div>
        
    
    )
}
export default Driver;
