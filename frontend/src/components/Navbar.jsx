import { useEffect, useState } from "react"
import "./Navbar.css"
import { NavLink, useNavigate } from "react-router-dom";
export default function Navbar({isLogedIn,setisLogedIn}){
   const [user,setUser]=useState(null);
   const navigate=useNavigate();
   useEffect(()=>{
      if(localStorage.getItem("user")){
         setUser(JSON.parse(localStorage.getItem("user")));
      }
   },[]);
   function handleLogout(){
    localStorage.removeItem("user");
    setUser(null);
    setisLogedIn(false);
    navigate("/login");
    }
    return(<>
      <header>
        <div className="container">
            <a href="/"><div className="logo">
            <i className="fa-solid fa-house-chimney-crack"></i>
            <p>Service Space</p>
            </div></a>
            <div className="search-options">
              <div className="location">
                  <select name="" id="" active>
                    <option value="">Bhopal</option>
                    <option value="">Indore</option>
                    <option value="">Gwalior</option>
                  </select>
              </div>
              <div className="searchbar">
                   <i className="fa-solid fa-magnifying-glass"></i>
                   <form>
                    <input type="text" placeholder="Search for Service"/>
                   </form>
              </div>
            </div>
            <div className={`user`}>
                <NavLink to="/Login" className={`login-btn ${isLogedIn?"hide":""}`}id="nav-login">Login</NavLink>
                <NavLink to="/Signup" className={`login-btn ${isLogedIn?"hide":""}`} id="nav-login">Signup</NavLink>
                <button className={`login-btn ${!isLogedIn?"hide":""}`} onClick={handleLogout} id="nav-login">Logout</button>
            </div>
        </div>
      </header>
    </>)
}