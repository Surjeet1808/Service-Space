import "./Payment.css"
import {NavLink} from "react-router-dom"
const Payment=()=>{
    return<>
    <div className="payment">
        <div className="pay">
            <p>Payment Details</p>
            <form action="/success">
                <input type="text" placeholder="Name On Card" required />
                <input type="text" placeholder="Card Number" required/>
                <div className="subinput">
                <input id="exp" type="date" required />
                <input id="cvv" type="text" placeholder="CVV" required/>
                </div>
                <button className="pay-btn" id="pay-btn">Pay</button>
            </form>
        </div>
    </div>
    </>
}

export default Payment;