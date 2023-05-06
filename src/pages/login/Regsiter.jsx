import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import back from "../../assets/images/my-account.jpg";


export const Regsiter = () => {
  const navigate = useNavigate();
  // Submitting to our backend
  const [errMessage, setErrMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  // The inputs to be submitted to the backend
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("")
 const data ={
  username,
  email,
  gender,
  password  
 }
//  console.log(data);
// const [inputs, setInputs] = useState({
//   username: "",
//   email: "",
//   gender: "",
//   password: "",
// })
// const handleChange = (e)=>{
//   setInputs((prev)=> ({ ...prev, [e.target.name]: [e.target.value]}))
// }
// console.log(inputs);
const handleSubmit = (e) =>{
  e.preventDefault();

  fetch("https://blog.shbootcamp.com.ng/signup.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if(data.status=== "success"){
        navigate("/login")
      }
      // if (data.status === "error") {
      //   setErrMessage(data.message);
      //   setTimeout(() => {
      //     setErrMessage("");
      //   }, 3000);
      // } else {
      //   setSuccessMessage(data.message);
      //   setTimeout(() => {
      //     Redirect("/login");
      //     setInputs({
      //       username: "",
      //       email: "",
      //       gender: "",
      //       password: "",
      //     });
      //   }, 3000);
      // }
      // console.log(data, inputs);
    });
};








  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form 
          action="https://blog.shbootcamp.com.ng/signup.php"
          method="post">
            <span>Email address *</span>
            <input
              type="email"
              value={email}
              id="email_address"
              required
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            />
            <span>Username *</span>

            <input type="text"
              value={username}
              id="username"
              required
              onChange={(e)=>{
                setUsername(e.target.value);
              }} />
            <select value={gender} id="gender" onChange={(e)=>{
                setGender(e.target.value);
              }}>
              <option value="">Choose your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span>Password *</span>
            <input
            required 
             type="password"
             value={password}
             id="password"
             onChange={(e)=>{
              setPassword(e.target.value);
            }}
            />

            <button className="button" onClick={handleSubmit}>Register</button>

            <p className="text-sm text-center text-red-600">{errMessage}</p>
        <p className="text-sm text-center text-green-600">{successMessage}</p>
          </form>
        </div>
      </section>
    </>
  );
};
