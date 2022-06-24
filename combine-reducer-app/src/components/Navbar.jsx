import React from "react";
import styled from "styled-components";
// import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const NavbarDiv=styled.div`
display:flex;
width:25%;
margin:auto;
color:black;
margin-top:50px;
justify-content:space-around;
border:1px solid black;
// text-decoration:underline;

&:hover{
  cursor:pointer;
}
`



const Navbar = () => {

const  { auth, changeAuth } =React.useContext(AuthContext)
const navigate=useNavigate()
// console.log(auth)

 function handleLogout(){
   changeAuth()
navigate("/")
localStorage.clear()
}
  return (
    
 


  <NavbarDiv>

   {auth?  <Link to="/Home">Home</Link>:<a href=".">Home</a>}
   {localStorage.getItem("token")?<button onClick={handleLogout}>Logout</button>:<Link to="/">Login</Link>}
  </NavbarDiv>


   
  )
};

export default Navbar;
