import React, {useState} from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import {Link, useNavigate} from 'react-router-dom'



export const Login = () => {
 const navigate = useNavigate();
//  State handling 
const [errMessage, setErrMessage] = useState("")
const [successMessage, setSuccessMessage] = useState("")


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
 
 
const data ={
  email,
  password
} 
 

const handleSubmit = (e) =>{
  e.preventDefault();
// handling the api
fetch("https://blog.shbootcamp.com.ng/signin.php", {
method: "POST",
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify(data)

})
.then((res)=>{
  return res.json();
})
.then((data)=>{
  console.log(data)
  const userId = data.user_id;
  const username = data.username;
if(data.status === "success"){
  setTimeout(()=>{
    setSuccessMessage(data.message);
    sessionStorage.setItem("id", userId);
    sessionStorage.setItem("username", username);
    navigate("/");
  }, 3000)
}
else if(data.status === "error"){
  setErrMessage(data.message);
  setTimeout(()=>{
    setErrMessage("");
    console.log(data)
  }, 3000);
}


})
 
};

 return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form action="post">
            <h3>{errMessage}</h3>
            <h3>{successMessage}</h3>
            <span>Email address *</span>
            <input type='email' 
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            />
            <span>Password *</span>
            <input type='password' 
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            />
            <button className='button' onClick={handleSubmit}>Log in</button>
          <p>Do you have an account?
           <span>
            <Link to ="/register">Register</Link>
           </span>
           </p>
          </form>
        </div>
      </section>
    </>
  )
}
