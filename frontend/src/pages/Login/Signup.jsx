import { useNavigate } from "react-router-dom";
import "./Login.css"
import {useState} from "react"
//import axios from "axios"

export default function Signup({setisLogedIn}){
   const [user,setUser]=useState({
      username:"",
      password:"",
      email:""
   });

   const navigate=useNavigate()
   
   function updateUser(e){
      let name=e.target.name;
      let value=e.target.value;
      setUser((pre)=>{
         return {...pre,[name]:value}
      });
   }


   
   function handelSubmit(e){
      e.preventDefault();
      localStorage.setItem("user",JSON.stringify(user));
      console.log(user);
      setisLogedIn(true); // or you can use axios to send the data to the server and set isLogedIn to true when the server response is successful
      navigate("/")
   }

   return<>
     <div  className="login">
        <form  className="login-form" action="/">
            <h1>Signup to Service Space</h1>
            <input type="username" placeholder="enter username" name="username" onChange={updateUser} value={user.username}/>
            <input type="email" placeholder="enter email" name="email" onChange={updateUser} value={user.email}/>
            <input type="password" placeholder="password" name="password" onChange={updateUser} value={user.password}/>
            <br />
            <button onClick={(e)=>handelSubmit(e)} className="login-btn">Signup</button>
        </form>
     </div>
   </>
}
