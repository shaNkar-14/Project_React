import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Edit(){
    const {id} = useParams();
    const[data,setData] = useState([])
    const navigate= useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:3000/users/'+id, data).then(res=>{
            alert("Data Added Successfully!");
            navigate("/emp")
        })
    }
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-lightt p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name">ID: </label>
                    <input type="text" name="name" disabled value={data.id}className="form-control" ></input>
                </div>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" name="name"  value={data.name}className="form-control"  onChange={e=>setData({...data,name:e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Sex">Sex: </label>
                    <input type="text" value={data.sex} className="form-control" onChange={e=>setData({...data,sex:e.target.value})}></input>
                </div><br/>
                <div>
                    <label htmlFor="Date Of Birth"> Date Of Birth : </label>
                    <input type="text" name="Date Of Birth" value={data.dob} className="form-control" onChange={e=>setData({...data,dob:e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Salary"> Salary : </label>
                    <input type="text" name="Salary" value={data.salary} className="form-control" onChange={e=>setData({...data,salary:e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Department"> Department : </label>
                    <input type="text" name="Department" value={data.department} className="form-control" onChange={e=>setData({...data,department:e.target.value})}></input>
                </div>
                <br/>
                <button className="btn btn-info">Save</button>
            </form>
           
        </div>
        </div>
    )
}

export default Edit;
