
import "./Footer.css"
export const Footer=()=>{
    return<>
     <footer>
        <div className="footer">
         <div className="footer-logo">
            <i class="fa-solid fa-house-chimney-crack"></i>
            <p>Service Space</p>
         </div>

         <div className="footer-links">
            <div className="costomer">
            <p>Costomer</p>
            <ul>
                <li>Login/SignUp</li>
                <a href="/help"><li>Help</li></a>
               </ul>
            </div>
            <div className="company">
              <p>Company</p>
               <ul>
                <li>About us </li>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className="partners">
            <p>Partners</p>
            <ul>
                <li>Join our team</li>
               </ul>
            </div>
         </div>
         <div className="social-media">
         <i class="fa-brands fa-square-instagram"></i>
         <i class="fa-brands fa-linkedin"></i>
         <i class="fa-brands fa-square-x-twitter"></i>
         <i class="fa-brands fa-square-facebook"></i>
         </div>

         <hr />

         <div className="copyright">
            <p>© Copyright 2024 ServiceSpace. All rights reserved.</p>
         </div>
        </div>
     </footer>
    </>
}