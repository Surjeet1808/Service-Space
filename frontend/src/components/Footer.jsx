
import "./Footer.css"
export default function Footer(){
    return<>
     <footer>
        <div className="footer">
         <a href="/"><div className="footer-logo">
            <i class="fa-solid fa-house-chimney-crack"></i>
            <p>Service Space</p>
         </div></a>

         <div className="footer-links">
            <div className="costomer">
            <p>Costomer</p>
            <ul>
                <a href="/Login"><li>Login/SignUp</li></a>
                <a href="/help"><li>Help</li></a>
               </ul>
            </div>
            <div className="company">
              <p>Company</p>
               <ul>
                <a href="/About"><li>About us </li></a>
                <a href="/Privacy"><li>Privacy policy</li></a>
               </ul>
            </div>
            <div className="partners">
            <p>Partners</p>
            <ul>
                {/* <a href="#"><li>Join as a professional</li></a> */}
                <a href="/partners"><li>our Partners</li></a>
               </ul>
            </div>
         </div>
         <div className="social-media">
         <i className="fa-brands fa-square-instagram"></i>
         <i className="fa-brands fa-linkedin"></i>
         <i className="fa-brands fa-square-x-twitter"></i>
         <i className="fa-brands fa-square-facebook"></i>
         </div>

         <hr />

         <div className="copyright">
            <p>© Copyright 2024 ServiceSpace. All rights reserved.</p>
         </div>
        </div>
     </footer>
    </>
}