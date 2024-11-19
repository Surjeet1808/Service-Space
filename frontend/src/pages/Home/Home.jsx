import "./Home.css"
import Category from "../../components/Subcomponents/Category"
import Header from "../../components/Header"
import axios from "axios"
import { useState,useEffect, useContext } from "react"
import { GlobleContext } from "../../context/globelcontext"
export default function Home(){
    const {data}=useContext(GlobleContext);
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