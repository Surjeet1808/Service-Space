import "./Login.css"
import {useState} from "react"

export const Login=()=>{
   const [user,setUser]=useState({
      username:"",
      password:""
   });
   
   function updateUser(e){
      let name=e.target.name;
      let value=e.target.value;
      setUser((pre)=>{
         return {...pre,[name]:value}
      });
   }

   return<>
     <div  className="login">
        <form  className="login-form" action="/">
             <h1>Login to Service Space</h1>
            <input type="username" placeholder="enter username" name="username" onChange={updateUser} value={user.username}/>
            <input type="password" placeholder="password" name="password" onChange={updateUser} value={user.password}/>
            <br />
            <button class="login-btn">Login</button>
            <a href="/Signup">Create new Acount</a>
        </form>
        
     </div>
   </>
}
