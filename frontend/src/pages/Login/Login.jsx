import React, { useState } from 'react'
import img1 from "../../assets/signin.jpg"
import { Link, useNavigate } from "react-router-dom";
import style from "./style.css"
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      // Await the axios response
      const res = await axios.post('http://localhost:8080/auth/login', { email: email, password: password });

      // Log the entire response to see details
      console.log('Response:', res.status);

      if (res.status === 200) {
        console.log("user login sucessfully")
        const token = res.data.token; // Assuming the token is in response.data.token
        localStorage.setItem("authToken", token);
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
    <div>
      <div className='main'>

        <div className='sideImage'>
          <img src={img1} alt='Log In' height={600} />
        </div>
        <div className='SBox'>
          <div className='MainBox'>

            <div className='inputBox'>
              <p>Email</p>
              <input placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}></input>
            </div>
            <div className='inputBox'>
              <p>Password</p>
              <input placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input>
            </div>
            <div className='Submit'>
              <button onClick={submit}>Log In</button>
            </div>
          </div>
          <div>
            <Link to={"/signup"}>Already User</Link>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Login