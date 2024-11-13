import React from 'react'
import img1 from "../../assets/signin.jpg"
import  {Link} from "react-router-dom";
import style from "./style.css"

const Login = () => {
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
    <input placeholder='Email'></input>
  </div>
  <div className='inputBox'>
    <p>Password</p>
    <input placeholder='Password'></input>
  </div>
  <div className='Submit'>
    <button>Log In</button>
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