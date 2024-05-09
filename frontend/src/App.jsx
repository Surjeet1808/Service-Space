import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Login} from "./components/Login"
import {Home} from "./pages/Home"
import {Show} from "./pages/Show"
import {Cart} from "./pages/Cart"
import {Payment} from "./pages/Payment"
import {Success} from "./pages/Success"
import {Help} from "./pages/Help"
export const App=()=>{
  return <>
  <BrowserRouter>
  <Login/>
  {/* <Navbar/> */}
  <Routes>
    <Route path="/" element={<Home/>}/>;
    <Route path="/show" element={<Show/>}/>;
    <Route path="/Cart" element={<Cart/>}/>;
    <Route path="/Payment" element={<Payment/>}/>;
    <Route path="/Success" element={<Success/>}/>;
    <Route path="/help" element={<Help/>}/>;
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}