import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Header (){
    const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom
    return<>
        <div className="home-show">
           <div className="services">
                 <h1>Home services at your doorstep</h1>
                  <div className="service-group">
                    <h2>What are you looking for?</h2>
                    <button to="/tiffin"  onClick={()=>navigate("/tiffin")} className="tiffin">Tiffin Service</button>
                    <div className="choose-service">
                        <div className="service">
                            <p>Cleaning</p>
                            <i class="fa-solid fa-broom"></i>
                        </div>
                        <div className="service">
                            <p>Repairs</p>
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                        </div>
                        <div className="service">
                            <p>PestGuard</p>
                            <i class="fa-solid fa-bug-slash"></i>
                        </div>
                        <div className="service">
                            <p>Plumber</p>
                            <i class="fa-solid fa-shower"></i>
                        </div>
                        <div className="service">
                            <p>Electrician</p>
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div className="service">
                            <p>Carpanter</p>
                            <i class="fa-solid fa-toolbox"></i>
                        </div>
                        <div className="service">
                            <p>Paint</p>
                            <i class="fa-solid fa-paint-roller"></i>
                        </div>
                        <div className="service">
                            <p>Waterproofing</p>
                            <i class="fa-solid fa-tarp-droplet"></i>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="grid">
                <img src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                <img src="https://facts.net/wp-content/uploads/2023/10/20-surprising-facts-about-carpentry-1696321212.jpg" alt="" />
                <img src="https://jscleaningbrisbane.com.au/wp-content/uploads/2021/04/included-in-office-cleaning.jpg" alt="" />
                <img src="https://img.lovepik.com/photo/20230421/medium/lovepik-happy-construction-worker-using-bubble-level-photo-image_352258326.jpg" alt="" />
                </div>
        </div>
    </>
}