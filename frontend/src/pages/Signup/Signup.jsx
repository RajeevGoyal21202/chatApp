import React from 'react'
import img1 from "../../assets/signin.jpg"
import style from "./style.css"
const Signup = () => {
  return (
    <div className='main'>

      <div className='sideImage'>
        <img src={img1} alt='signin' height={600} />
      </div>
      <div className='SignBox'>
        <div className='inputBox'>
          <p>Name</p>
          <input placeholder='Name'></input>
        </div>
        <div className='inputBox'>
          <p>Email</p>
          <input placeholder='Email'></input>
        </div>
        <div className='inputBox'>
          <p>Phone</p>
          <input placeholder='Phone'></input>
        </div>
        <div className='inputBox'>
          <p>Password</p>
          <input placeholder='Password'></input>
        </div>
        <select name="cars" id="cars" className='selector'>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Institute">Institute</option>
        </select>
        <div className='Submit'>
          <button>Sign In</button>
        </div>
      </div>

    </div>
  )
}

export default Signup