import { useState,useEffect } from "react"
import axios from "axios"
export default function Service(props){
    const [data,setData]=useState([{
        title:"",
        image:[""]
    }]);
    let randindex=Math.floor(Math.random()*4);
    useEffect(()=>{
        if(props.service){
        axios.get(`http://localhost:8080/data/${props.service}`)
        .then((res)=>{
           // console.log(res.data)
            setData(res.data);
        })
        .catch((e)=>{console.log(e.message)})
    }
    },[props.service]);
    return<>
         <div className="card">
         <a href={`/show/${props.service}`}>
        <img src={data[0].image[randindex]} alt="image" />
        <p>{data[0].title}</p>
        </a>
        </div>
    </>
}