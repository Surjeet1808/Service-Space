import "./Success.css"
import { NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
export const Success=()=>{
    return<>
      <div className="success">
        <div className="success-msg">
        <FontAwesomeIcon id="succ-icn" icon={faCircleCheck} />
        <p id="succ">Success!</p>
        <p id="succ-msg">Congratulations Service Booked</p>
        <div className="succ-btn">
                <a href={"/"} id="succ-btn" >Back to Home</a>
              </div>
        </div>
      </div>
    </>
}