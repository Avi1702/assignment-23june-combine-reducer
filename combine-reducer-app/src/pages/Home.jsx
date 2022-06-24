import React from "react";
import {v4 as uuid} from "uuid";
// import { useDispatch } from "react-redux"
// import { AddTodo } from "../Redux/action"
// import TodoItem from "./Todo_Item";
// import {Link} from "react-router-dom"
import styled from "styled-components"



const HomeDiv=styled.div`
// display:flex;
row-gap:20px;
width:40%;
margin:auto;
margin-top:50px;
// border:1px solid red;
`
const ItemDiv=styled.div`
display:flex;
// margin-top:50px;
width:100%;
padding:10px;
justify-content:space-around;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Home = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [data,setData]=React.useState([])
  //   let [toggle,setToggle]=React.useState(false)
  //  const dispatch=useDispatch()

   async function list(){
    try{
    const res=await fetch(`http://localhost:30001/todos`)
    const result=await res.json()
    setData(result)
      
    }
    catch(err){
      console.log(err)
    }
    }
    
     
    React.useEffect(()=>{
    list()
    },[])

 
  // function handleToggle(id){
   
   
  //  fetch(`http://localhost:30001/todos/${id}`,{


  //   method:"PATCH",
  

  //  })
  
  //  .then((res)=>res.json())
  //  .then((res)=>console.log(res))
  //  .catch((err)=>console.log(err))

  //  list()
  
  // }

    // function handleDelete(id){
    //   fetch(`http://localhost:30001/todos/${id}`,{
    // method:"DELETE"
    //   })
    //   .catch((err)=>console.log(err))

    //   list()
    // }
  

  const handleAdd=()=>{
   
   const payload={
      title:inputValue,
      status:false,
      id:uuid()
    };

   
    fetch(`http://localhost:30001/todos`,{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
       "Content-Type":"application/json" 
      }
    })
    .catch((res)=>console.log(res))
     list()
    // dispatch(AddTodo(payload));
  }

 return(

    <HomeDiv>

    
     <h1>Add Todo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) =>setInputValue(e.target.value)}></input>
      <button onClick={handleAdd}>Add</button>
      
      <div style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",padding:"20px",marginTop:"50px"}}>
      {
        data.map((items)=>

        // <p>{items.title}</p>
        <ItemDiv key={items.id}>
         <div> {items.title}----{items.status?<span>completed</span>:<span>Not completed</span>}---</div>
        <div> <button>Toggle</button></div>
        <div><a href="#">Get Details</a></div>
        <div> <button>Delete</button></div>
        </ItemDiv>
        )
      }
      </div>
    
    </HomeDiv>
  
  )
 
};

export default Home;
