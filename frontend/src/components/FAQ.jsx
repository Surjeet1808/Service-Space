import "./FAQ.css"
import {useState,useRef} from "react"
export const FAQ=(props)=>{

     let [t,set_t]=useState(false);
     let btn=useRef();
     let ansdiv=useRef();
    function toggle(){
       if(t==false){
          btn.current.innerHTML="–";
          ansdiv.current.style.display="block";
          set_t(true);
       }
       else{
         btn.current.innerHTML="+";
         ansdiv.current.style.display="none";
         set_t(false);
       }
    }
   return<>
   <div className="faq">
       <div className="question">
       <div className="que">
        <p>{props.que}</p>
       </div>
       <div className="ans" ref={ansdiv}>
        <p>{props.ans}</p>
       </div>
       </div>
       <div className="faq-btn">
        <button id="faq-btn" onClick={toggle} ref={btn}>+</button>
       </div>
   </div>
   </>
}