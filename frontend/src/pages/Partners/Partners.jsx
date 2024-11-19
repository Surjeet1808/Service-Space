import { useContext } from "react"
import Pcard from "../../components/Subcomponents/partnercard"
import "./Partners.css"
import axios from "axios"
import { useState,useEffect } from "react"
import { GlobleContext } from "../../context/globelcontext"
const Partners=()=>{
    const {partners}=useContext(GlobleContext);
    return<>
      <div className="partners-container">
        {partners.map((worker)=>{
          return <Pcard worker={worker}/>
        })}
      </div>
    </>
}

export default Partners;