import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Login} from "./pages/Login"
import {Signup} from "./pages/Signup"
import {About} from "./pages/About"
import {Privacy} from "./pages/Privacy"
import {Home} from "./pages/Home"
import {Show} from "./pages/Show"
import {Cart} from "./pages/Cart"
import {Payment} from "./pages/Payment"
import {Success} from "./pages/Success"
import {Help} from "./pages/Help"
import {Partners} from "./pages/Partners"
export const App=()=>{
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>;
    <Route path="/show/:id" element={<Show/>}/>;
    <Route path="/Cart" element={<Cart/>}/>;
    <Route path="/Payment" element={<Payment/>}/>;
    <Route path="/Success" element={<Success/>}/>;
    <Route path="/help" element={<Help/>}/>;
    <Route path="/login" element={<Login/>}/>;
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/partners" element={<Partners/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}