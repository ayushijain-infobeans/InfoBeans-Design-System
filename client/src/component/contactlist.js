import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Navbar'


function ContactList() {
   
    const [contact,setcontacts]=useState([])
    useEffect(()=>{
        axios({
            method:'get',
            url:"http://localhost:3000/api/getContactUs",
            
        }).then((response)=>{
            console.log(response.data)
            setcontacts(response.data)
            
        },(error)=>{
            console.log("Error from api",error)
        })
    
    },[])
    return (
        <div  className="container">
              
<br/><br/><br/><br/>
<h3 className="text-center">User Data</h3><br/>
            <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Description</th>
      <th scope="col">File</th>
    </tr>
  </thead>
  <tbody>
    {contact.map((each)=>{
       return( 
       <tr>
      
      <td>{each.firstname +" " +each.lastname }</td>

      {/* <td>{each.lastname}</td> */}
      <td>{each.email}</td>
      <td>{each.description}</td>
      <td>{each.file}</td>
    </tr>)
    })}
    
 
  </tbody>
</table>
        </div>
    )
}

export default ContactList
