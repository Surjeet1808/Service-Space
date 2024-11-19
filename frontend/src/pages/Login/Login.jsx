import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"
import {useContext, useState} from "react"
import { GlobleContext } from "../../context/globelcontext";

export default function Login({setisLogedIn}){
   const [user,setUser]=useState({
      username:"",
      password:""
   });
   const [error, setError]=useState(false);  // Add this line to display an alert message when login fails.  // Add this line to set the error state to false when login fails.  // Add this line to set the error state to true when login fails.  // Add this line to display an alert message when login fails.  // Add this line to set the error state to false when login fails.  // Add this line to set the error state to true

   const {valideuser}=useContext(GlobleContext);

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
      if(user.name=valideuser.username&&user.password==valideuser.password){localStorage.setItem("user",JSON.stringify(user));
      setisLogedIn(true);  // Add this line to set the isLogedIn state to true when login is successful.
      navigate("/")}
      else{
         setError(true);  // Add this line to display an alert message when login fails.
      }
   }

   return<>
     <div  className="login">
        <form  className="login-form" action="/">
             <h1>Login to Service Space</h1>
             {error&&<p style={{color:"red"}}>Invalide username or password</p>}
            <input type="username" placeholder="enter username" name="username" onChange={updateUser} value={user.username}/>
            <input type="password" placeholder="password" name="password" onChange={updateUser} value={user.password}/>
            <br />
            <button onClick={(e)=>handelSubmit(e)} className="login-btn">Login</button>
            <NavLink href="/Signup">Create new Acount</NavLink>
        </form>
        
     </div>
   </>
}
