import { createContext, useState, useEffect } from "react";
export const GlobleContext=createContext();
import axios from "axios";
function Context(prop){
    const [data,setData]=useState(null);
    const valideuser={
        username:"Surjeet",
        password:"1234",
        email:"surjeet@gmail.com"
    }
    const [partners,setPartners]=useState([{
        name:"",
        Skill:"",
        contact:"",
        location:""
    }]);
    let [faqs,setFaqs]=useState([]);

    async function fatchfaqs(){
        await axios.get("http://localhost:8080/faqs")
        .then((res)=>{
           setFaqs(res.data);
        })
        .catch((err)=>{
           console.log(err);
        })
      } 
    async function fatchPartners(){
        await axios.get("http://localhost:8080/workers")
        .then((res)=>{
            setPartners(res.data);
        })
        .catch((e)=>{console.log(e.message)})
    }
    async function fatchdata(){
        await axios.get("http://localhost:8080/data")
        .then((res)=>{
            //console.log(res.data)
            setData(res.data);
        })
        .catch((e)=>{console.log(e.message)})
    }
    useEffect(()=>{
        fatchdata();
        fatchPartners();
        fatchfaqs()
    },[]);
    return data&&(
        <GlobleContext.Provider value={{data,partners,faqs,valideuser}}>
          {prop.children}
        </GlobleContext.Provider>
    )
}

export default Context;