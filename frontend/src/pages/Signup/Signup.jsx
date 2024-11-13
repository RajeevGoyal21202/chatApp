import React, { useState } from 'react'
import img1 from "../../assets/register.jpg"
import  {Link} from "react-router-dom";
import style from "./style.css"
const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  
  const submit = () => {
   
    console.log(name,email,phone,password,role)
  }
  return (
    <div className='main'>

      <div className='sideImage'>
        <img src={img1} alt='signin' height={600} />
      </div>
      <div className='SignBox'>
      <div className='MainBox'>
   
        <div className='inputBox'>
          <p>Name</p>
          <input placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div className='inputBox'>
          <p>Email</p>
          <input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <div className='inputBox'>
          <p>Phone</p>
          <input placeholder='Phone'onChange={(e)=>{setPhone(e.target.value)}}></input>
        </div>
        <div className='inputBox'>
          <p>Password</p>
          <input placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <select name="cars" id="cars" className='selector'onChange={(e)=>{setRole(e.target.value)}}>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Institute">Institute</option>
        </select>
        <div className='Submit'>
          <button onClick={submit}>Sign In</button>
        </div>
        </div>
        <div>
          <Link to={"/"}>Already User</Link>
        </div>
        
       
       
      </div>

    </div>
  )
}

export default Signup