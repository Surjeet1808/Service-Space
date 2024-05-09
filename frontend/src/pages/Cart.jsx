import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faToolbox} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { NavLink } from "react-router-dom"
export const Cart=()=>{

    return<>
    <div className="cart">
     <div className="cart-container">
        <div className="cart-header">
        <FontAwesomeIcon  id="cart-icn" icon={faToolbox} />
        <p>My Cart</p>
        </div>
        <div className="main-cart">
            <div className="items">
             <div className="item-list">



                  <div className="item">
                    <div className="item-img">
                    <img src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                    <div className="item-titel">
                        <p id="i-t">This is Titel</p>
                        <p>4.5 Stars</p>
                    </div>
                    </div>
                    <div className="item-cost">
                        <p id="i-ch">Charges</p>
                        <p>&#8377;500.00</p>
                    </div>
                    <div className="status">
                       <p id="i-st">Status</p> 
                       <p id="i-av"> Availible</p>
                    </div>
                  </div>



                  <div className="item">
                    <div className="item-img">
                    <img src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                    <div className="item-titel">
                        <p id="i-t">This is Titel</p>
                        <p>4.5 Stars</p>
                    </div>
                    </div>
                    <div className="item-cost">
                        <p id="i-ch">Charges</p>
                        <p>&#8377;500.00</p>
                    </div>
                    <div className="status">
                       <p id="i-st">Status</p> 
                       <p id="i-av"> Availible</p>
                    </div>
                  </div>



                  <div className="item">
                    <div className="item-img">
                    <img src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                    <div className="item-titel">
                        <p id="i-t">This is Titel</p>
                        <p>4.5 Stars</p>
                    </div>
                    </div>
                    <div className="item-cost">
                        <p id="i-ch">Charges</p>
                        <p>&#8377;500.00</p>
                    </div>
                    <div className="status">
                       <p id="i-st">Status</p> 
                       <p id="i-av"> Availible</p>
                    </div>
                  </div>



                  <div className="item">
                    <div className="item-img">
                    <img src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                    <div className="item-titel">
                        <p id="i-t">This is Titel</p>
                        <p>4.5 Stars</p>
                    </div>
                    </div>
                    <div className="item-cost">
                        <p id="i-ch">Charges</p>
                        <p>&#8377;500.00</p>
                    </div>
                    <div className="status">
                       <p id="i-st">Status</p> 
                       <p id="i-av"> Availible</p>
                    </div>
                  </div>



             </div>
             <div className="totel">
                 <p>totel</p>
                 <p>&#8377;2000.00</p>
             </div>
            </div>
            <div className="cart-details">
              <div className="totel-charge cart-details-box">
                 <p>Totel</p>
                 <p>&#8377;2000.00</p>
              </div>
              <div className="discount cart-details-box">
                 <p>Discount</p>
                 <p>-&#8377;50.00</p>
              </div>
              <div className="Tax cart-details-box">
                 <p>Tax</p>
                 <p>0</p>
              </div>
              <div className="estimated-totel cart-details-box">
                 <p>Estimated-totel</p>
                 <p>&#8377;1950.00</p>
              </div>
              <div className="proceed">
                <a href={"/Payment"} id="proceed-btn" >Proceed to pay</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
}