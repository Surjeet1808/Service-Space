import "./Login.css"
import {useState} from "react"
import { Navbar } from "./Navbar.jsx"

export const Login=()=>{

   const [loginStyle,changeDisplay]= useState({display: "none"});

function closeForm(){
   console.log("clicked",loginStyle["display"]);
   changeDisplay((currStyle)=>{
      return {...currStyle,display:"none"}
   })
}
function openForm(){
   console.log("clicked",loginStyle["display"],"inopen");
   changeDisplay((currStyle)=>{
      return {...currStyle,display:"flex"}
   })
}
   return<>
    <Navbar open={openForm}/>
     <div style={loginStyle} className="login">
        <div className="close">
        <button onClick={closeForm} id="close-login">X</button>
        </div>
        <form  className="login-form" action="">
            <input type="email" placeholder="enter email"/>
            <input type="password" placeholder="password"/>
            <br />
            <button class="login-btn">Login</button>
        </form>
     </div>
   </>
}
