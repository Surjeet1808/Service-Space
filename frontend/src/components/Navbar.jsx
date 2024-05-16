import "./Navbar.css"
export const Navbar= ()=>{
    return <>
      <header>
        <div className="container">
            <a href="/"><div className="logo">
            <i class="fa-solid fa-house-chimney-crack"></i>
            <p>Service Space</p>
            </div></a>
            <div className="search-options">
              <div className="location">
                  <select name="" id="" active>
                    <option value="">Bhopal</option>
                    <option value="">Indore</option>
                    <option value="">Gwalior</option>
                  </select>
              </div>
              <div className="searchbar">
                   <i class="fa-solid fa-magnifying-glass"></i>
                   <form action="">
                    <input type="text" placeholder="Search for Service"/>
                   </form>
              </div>
            </div>
            <div className="user">
                <a href="/Login" className="login-btn" id="nav-login">Login</a>
                <a href="/Signup" className="login-btn" id="nav-login">Signup</a>
            </div>
        </div>
      </header>
    </>
}