import React, { useState } from 'react'
import img1 from "../../assets/register.jpg"
import  {Link,useNavigate} from "react-router-dom";
import axios from "axios"
import style from "./style.css"
const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("Student");
  
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {  
      // Await the axios response
      const res = await axios.post('http://localhost:8080/auth/register', {
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role
      });
  
      // Log the entire response to see details
      console.log('Response:', res.status);

      if(res.status === 201){
        console.log("user register sucessfully")
        navigate("/dashboard")
      }
      
      // Optionally, return or handle the response data
      return res.data;
    }
    catch (error) {
      // Log any error that occurs during the request
      console.log('Error during registration:', error.response.data.message);
    }
  };
  
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