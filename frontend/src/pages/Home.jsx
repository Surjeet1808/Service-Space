import "./Home.css"
import { Category } from "../components/home-component/Category"
import { Header } from "../components/Header"
import axios from "axios"
import { useState,useEffect } from "react"
export const Home=()=>{
    const [data,setData]=useState([{
        title:"",
        services:[]
    }]);
    useEffect(()=>{
        axios.get("http://localhost:8080/data")
        .then((res)=>{
            console.log(res.data)
            setData(res.data);
        })
        .catch((e)=>{console.log(e.message)})
    },[]);
    return<>
      <main>
        <div className="main-content">
            <Header/>
            <div className="category">
                 {data.map((category)=>{
                    return <Category data={category}/>
                 })}
            </div>
        </div>
      </main>
    </>
}