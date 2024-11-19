import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login/Login"
import Signup from "./pages/Login/Signup"
import About from "./pages/About/About"
import Privacy from "./pages/About/Privacy"
import Home from "./pages/Home/Home"
import Show from "./pages/Show/Show"
import Cart from "./pages/Cart/Cart"
import Payment from "./pages/Payment/Payment"
import Success from "./pages/Success/Success"
import Help from "./pages/About/Help"
import Partners from "./pages/Partners/Partners"
import Tiffin from './pages/Tiffin/Tiffin'
import { useEffect, useState } from "react"
export const App=()=>{
   const [isLogedIn,setisLogedIn]=useState(false);
   useEffect(()=>{
       if(localStorage.getItem("isLogedIn")){
          setisLogedIn(true);
       }
   },[])
  return <>
  <BrowserRouter>
  <Navbar isLogedIn={isLogedIn} setisLogedIn={setisLogedIn}/>
  <Routes>
    <Route path="/" element={<Home/>}/>;
    <Route path="/show/:id" element={<Show/>}/>;
    <Route path="/Cart" element={<Cart/>}/>;
    <Route path="/Payment" element={<Payment/>}/>;
    <Route path="/Success" element={<Success/>}/>;
    <Route path="/help" element={<Help/>}/>;
    <Route path="/login" element={<Login setisLogedIn={setisLogedIn}/>}/>;
    <Route path="/signup" element={<Signup setisLogedIn={setisLogedIn}/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/partners" element={<Partners/>}/>
    <Route path="/tiffin" element={<Tiffin/>}/>;
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}