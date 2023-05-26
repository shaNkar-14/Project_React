import axios from "axios";
import React,{useState, useEffect} from "react";
import { Table } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';

function App(){
  const [columns, setColumns]=useState([])
const [records, setRecords] = useState([])
const navigate = useNavigate()

useEffect(()=> {
  axios.get('http://localhost:3000/users').then(res =>{
    setColumns(Object.keys(res.data[0]))
    setRecords(res.data)
  })
},[])

return(
  <div className="container mt-5">
    <h3 align="center" style={{fontFamily:"cursive"}}> Employee Details</h3>
    <div className="text-end"><Link to="/create" className="btn btn-primary">Add New</Link></div><br/>
    <Table striped bordered  hover size="lg" border="0" width="100%">
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}>{c}</th>
          ))}
          <td style={{fontWeight:"bold",fontFamily:"Elephant"}}>Edit</td>
          <td style={{fontWeight:"bold",fontFamily:"Elephant"}}>Delete</td>
        </tr>
      </thead>
      <tbody>
        {
        records.map((d, i) => (
          <tr key={i}>
            <td style={{width:"150px",fontFamily:"TimesNewRoman"}}>{d.id}</td>
            <td style={{width:"150px",fontFamily:"Gorgeia"}}>{d.name}</td>
            <td style={{width:"150px",fontFamily:"Gorgeia"}}>{d.sex}</td>
            <td style={{width:"150px",fontFamily:"Gorgeia"}}>{d.dob}</td>
            <td style={{width:"150px",fontFamily:"Gorgeia"}}>{d.salary}</td>
            <td style={{width:"150px",fontFamily:"Gorgeia"}}>{d.department}</td>
            <td style={{width:"150px"}}><Link to={`/update/${d.id}`} className="btn btn-primary" >Edit</Link></td>
            <td style={{width:"150px"}}>< button className="btn btn-danger" onClick={e=>handleSubmit(d.id)}>Delete</button></td>
          </tr>
        
          ))
        }
      </tbody>
    </Table>
  </div>
);
function handleSubmit(id){
  const conf= window.confirm("Do you want to delete ?");
  if(conf){
    axios.delete('http://localhost:3000/users/'+id)
    .then(res => {
      window.location.reload();
    }
    )
    .catch(err => console.log(err))
    navigate('/emp')
  }
}
}
export default App;
