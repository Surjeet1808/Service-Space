import "./Login.css"
import {useState} from "react"
//import axios from "axios"

export const Signup=()=>{
   const [user,setUser]=useState({
      username:"",
      password:"",
      email:""
   });
   
   function updateUser(e){
      let name=e.target.name;
      let value=e.target.value;
      setUser((pre)=>{
         return {...pre,[name]:value}
      });
   }
   
   // function register(e){
   //    e.preventDefault();
   //    console.log(user);
   //    console.log("i am tring to save user")
   //    axios.post("http://localhost:8080/signup",user)
   //    .then((res)=>{
   //       console.log(res.data);
   //    })
   //    .catch((err)=>console.log("apierr"));
   // }

   return<>
     <div  className="login">
        <form  className="login-form" action="/">
            <h1>Signup to Service Space</h1>
            <input type="username" placeholder="enter username" name="username" onChange={updateUser} value={user.username}/>
            <input type="email" placeholder="enter email" name="email" onChange={updateUser} value={user.email}/>
            <input type="password" placeholder="password" name="password" onChange={updateUser} value={user.password}/>
            <br />
            <button class="login-btn">Signup</button>
        </form>
     </div>
   </>
}
