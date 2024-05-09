import "./Payment.css"
import {NavLink} from "react-router-dom"
export const Payment=()=>{
    return<>
    <div className="payment">
        <div className="pay">
            <p>Payment Details</p>
            <form action="">
                <input type="text" placeholder="Name On Card" required />
                <input type="text" placeholder="Card Number" required/>
                <div className="subinput">
                <input id="exp" type="date" required />
                <input id="cvv" type="text" placeholder="CVV" required/>
                </div>
                <div className="pay-btn">
                <a href={"/Success"} id="pay-btn" >Pay</a>
              </div>
            </form>
        </div>
    </div>
    </>
}