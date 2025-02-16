import "./Show.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight,faChevronLeft,faTruckFast,faHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import { useState,useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobleContext } from "../../context/globelcontext"
import axios from "axios"
const Show=()=>{
    
    const msg=useContext(GlobleContext);
    console.log(msg)

    const [price,setPrice]=useState(499);
    const [like,setLike]=useState(false);
    const [mainimg,setImg]=useState("");
    const params =useParams();
    const {id}=params;
    const [data,setData]=useState({
        title:"",
        image:[],
        availible:true,
        work:[{
            service:"",
            price:""
        }]
    });
    let randindex=Math.floor(Math.random()*4);
    useEffect(()=>{
        axios.get(`https://service-space-t38t.onrender.com/data/${id}`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data[0]);
            setImg(res.data[0].image[randindex]);
        })
        .catch((e)=>{console.log(e.message)})
    },[]);
    return<>
    <div className="show">
        <div className="images">
           <img id="main-img" src={mainimg} alt="" />
           <div className="other-img-div">
           <div className="other icon">
           <FontAwesomeIcon id="aero-icn" icon={faChevronLeft} />
           </div>
                <img className="other" onClick={()=>{setImg(data.image[0])}} src={data.image[0]} alt="" />
                <img className="other" onClick={()=>{setImg(data.image[1])}} src={data.image[1]} alt="" />
                <img className="other" onClick={()=>{setImg(data.image[2])}} src={data.image[2]} alt="" />
                <img className="other" onClick={()=>{setImg(data.image[3])}} src={data.image[3]} alt="" />
            <div className="other icon">
            <FontAwesomeIcon id="aero-icn" icon={faChevronRight} />
            </div>
           </div>
        </div>
        <div className="details">
            <div className="title">
               <p id="title">{data.title}</p>
               {like&&<FontAwesomeIcon onClick={()=>{setLike(false)}} id="like" icon={faHeart} style={{color:"red"}}/>}
               {!like&&<FontAwesomeIcon onClick={()=>{setLike(true)}} id="like" icon={farHeart}/>}
            </div>
            <div className="price">
               <p id="cost">&#8377;{price}</p>
               <p id="ratting">4.2 Stars</p>
            </div>
            <div className="arival">
            <FontAwesomeIcon id="truck" icon={faTruckFast} />
            {data.availible&&<p id="av-para">Available for work</p>}
            {!data.availible&&<p id="notav-para">Currently Unavailable</p>}
            </div>
            <div className="select-service">
                <p id="service">select service</p>
                <p id="services">
                    {data.work.map((work)=>{
                        return <button onClick={()=>{setPrice(work.price)}}>{work.service}</button>
                    })}
                </p>
            </div>
            <p style={{color:"orange",margin:"0.5rem 0"}}>note: different service have different price select one</p>
            <div className="add-cart">
                <a href={"/Cart"} id="cart" >Payment</a>
            </div>
        </div>
    </div>
    </>
}

export default Show;