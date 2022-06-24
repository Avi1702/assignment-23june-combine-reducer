import React from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import Home from "./Home";

const Login = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const {changeAuth} =React.useContext(AuthContext)

  const handleLogin = () => {
     changeAuth()
    const payload = { email, password };
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        let token=res.token
        localStorage.setItem("token",JSON.stringify(token))
        if (token) {
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //   window.location.reload()
  };


 return (
 
 <div style={{marginTop:"50px"}}>
    
     
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
     
      <br />
    
        
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <br/>
      <button onClick={handleLogin}>LOGIN</button>
  
  </div>

 
 )
};

export default Login;
