import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/Group 1.png";
import mail from "../../assets/mail.png";
import style from "./style.css";
import axios from "axios";
import padlock from "../../assets/padlock.png";
import Card from "@mui/material/Card";
import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      // Await the axios response
      const res = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      });

      // Log the entire response to see details
      console.log("Response:", res.status);

      if (res.status === 200) {
        console.log("user login sucessfully");
        const token = res.data.token; // Assuming the token is in response.data.token
        localStorage.setItem("authToken", token);
        navigate("/dashboard");
      }

      // Optionally, return or handle the response data
      return res.data;
    } catch (error) {
      // Log any error that occurs during the request
      console.log("Error during registration:", error.response.data.message);
    }
  };
  return (
    <div>
      <div className="main">
        <Card sx={{ width: "1149px", height: "600px", borderRadius: "60px" }}>
          <Stack>
            <div className="inputArea">
              <div className="internalBox">
                <img src={icon} width={158} height={40}></img>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "30px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  LOGIN
                </p>
                <p style={{ paddingBottom: "20px", fontSize: "16px" }}>
                  Enter your Email and Password
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div className="inputBox">
                    <img src={mail} width={30} height={30} color={grey}></img>
                    <input
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="inputBox">
                    <img
                      src={padlock}
                      width={30}
                      height={30}
                      color={grey}
                    ></img>
                    <input
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="Submit">
                    <button onClick={submit}>LOGIN</button>
                  </div>
                  <div>
                    <Link to="/signup" style={{fontSize:"16px",textDecoration:"none"}}>Don't have an account? <span style={{color:"blue"}}> Create Account</span></Link>
                  </div>
                </div>
              </div>
              <div className="logo"></div>
            </div>
            <div></div>
          </Stack>
        </Card>

        {/* <div className='sideImage'>
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



        </div> */}
      </div>
    </div>
  );
};

export default Login;
