import "./Show.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight,faChevronLeft,faTruckFast} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { NavLink } from "react-router-dom"
export const Show=()=>{
    return<>
    <div className="show">
        <div className="images">
           <img id="main-img" src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
           <div className="other-img-div">
           <div className="other icon">
           <FontAwesomeIcon id="aero-icn" icon={faChevronLeft} />
           </div>
                <img className="other" src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                <img className="other" src="https://facts.net/wp-content/uploads/2023/10/20-surprising-facts-about-carpentry-1696321212.jpg" alt="" />
                <img className="other" src="https://www.bankrate.com/2022/02/14100625/Maintenance-tips-for-new-homeowners.jpeg?auto=webp&optimize=high" alt="" />
                <img className="other" src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
            <div className="other icon">
            <FontAwesomeIcon id="aero-icn" icon={faChevronRight} />
            </div>
           </div>
        </div>
        <div className="details">
            <div className="title">
               <p id="title">This Is Title</p>
               <FontAwesomeIcon id="like" icon={faHeart} />
            </div>
            <div className="price">
               <p id="cost">&#8377;500.00</p>
               <p id="ratting">4.2 Stars</p>
            </div>
            <div className="arival">
            <FontAwesomeIcon id="truck" icon={faTruckFast} />
            <p id="para">Available for work</p>
            </div>
            <div className="select-service">
                <p id="service">services</p>
                <p id="services">installation, maintenance, repairs, inspections, upgrades, emergencies, specialization, consultation, and supervision</p>
            </div>
            <div className="add-cart">
                <a href={"/Cart"} id="cart" >Add To Cart</a>
            </div>
        </div>
    </div>
    </>
}