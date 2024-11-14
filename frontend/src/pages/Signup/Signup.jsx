import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/Vector.png";
import axios from "axios";
import style from "./style.css";
import padlock from "../../assets/padlock.png";
import mail from "../../assets/mail.png";
import icon from "../../assets/Group 1.png";
import { Card, Stack } from "@mui/material";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      // Await the axios response
      const res = await axios.post("http://localhost:8080/auth/register", {
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role,
      });

      // Log the entire response to see details
      console.log("Response:", res.status);

      if (res.status === 201) {
        console.log("user register sucessfully");
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
    <div className="main" style={{ backgroundImage: { bgImage } }}>
      <Card sx={{ width: "1149px", height: "620px", borderRadius: "60px" }}>
        <Stack>
          <div className="inputArea">
            <div className="internalBox" style={{ paddingBottom: "30px" }}>
              <img src={icon} width={158} height={40}></img>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "30px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                Create Account
              </p>
              <p style={{ paddingBottom: "20px", fontSize: "16px" }}>
                Enter your Details
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div className="inputBox">
                  <input
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="inputBox">
                  <input
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="inputBox">
                  {/* <img src={mail} width={30} height={30} color={grey}></img> */}
                  <input
                    placeholder="Phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="inputBox">
                  <input
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div></div>
                <select
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Institute">Institute</option>
                </select>
                <div className="Submit">
                  <button onClick={submit}>Register</button>
                </div>
                <div>
                  <Link
                    to="/"
                    style={{ fontSize: "16px", textDecoration: "none" }}
                  >
                    {" "}
                    <span style={{ color: "blue" }}> Already have Account</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Card>
    </div>
  );
};

export default Signup;
