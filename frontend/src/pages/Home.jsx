import "./Home.css"
import { NavLink } from "react-router-dom"
export const Home=()=>{
    return<>
      <main>
        <div className="main-content">
            
            <div className="home-show">
                <div className="services">
                 <h1>Home services at your doorstep</h1>
                  <div className="service-group">
                    <h2>What are you looking for?</h2>
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
                <img src="https://www.bankrate.com/2022/02/14100625/Maintenance-tips-for-new-homeowners.jpeg?auto=webp&optimize=high" alt="" />
                <img src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg" alt="" />
                </div>
                
            </div>
            <div className="category">
                 <h1>Cleaning</h1>
                <div className="Cleaning group">
               <a href="/Show"><div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div> </a>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                </div>

                <h1>Home-repairs</h1>
                <div className="home-repairs group">
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                </div>

                 
                <h1>Ac-applince-repairs</h1>
                <div className="Ac-applince-repairs group">
                <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                </div>

                
                <h1>Electrian Plumber Carpanter</h1>
                <div className="el-pl-car group">
                <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                    <div className="card">
                        <img src="https://img-c.udemycdn.com/user/200_H/15383234_a753_3.jpg" alt="image" />
                        <p>Electrician</p>
                    </div>
                </div>


            </div>
        </div>
      </main>
    </>
}