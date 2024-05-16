import { Pcard } from "../components/partnercard"
import "./Partners.css"
import axios from "axios"
import { useState,useEffect } from "react"
export const Partners=()=>{
  const [data,setData]=useState([{
    name:"",
    Skill:"",
    contact:"",
    location:""
}]);
useEffect(()=>{
    axios.get("http://localhost:8080/workers")
    .then((res)=>{
        console.log(res.data)
        setData(res.data);
    })
    .catch((e)=>{console.log(e.message)})
},[]);
    return<>
      <div className="partners-container">
        {data.map((worker)=>{
          return <Pcard worker={worker}/>
        })}
      </div>
    </>
}