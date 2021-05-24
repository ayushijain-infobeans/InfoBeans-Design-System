import React from "react";
import { useHistory, Link, withRouter } from "react-router-dom"


import "../style/NavBar.css";

const Nav = () => {
    let history = useHistory();
    function logout() {
        sessionStorage.removeItem("token");
        history.push("/");
    }
  return (
    <header className="navbar">
      <div className="navbar__logoWrapper">
        <img
          className="navbar__logo"
          src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg"
          alt="logo"
        />
        <div className="text-portal navbar__portal">Intranet Portal</div>
      </div>
      <div className="navbar__menu">
        <span id="toggle-menu-header" className="ibic-menu"></span>
        <span className="ibic-clear" id="close-menu-header"></span>

        <ul className="navbar__links">
          <li>
           <Link to="/login"> <a>Home</a></Link>
          </li>
          <li>
           <Link to="/ContactForm"><a>Contact Form</a></Link> 
          </li>
          <li>
           <Link to="/ContactList"><a>Display Data</a> </Link> 
          </li>
        
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar__icon">
      <i class="fas fa-th fa-2x"></i>
      </div>
      <div className="navbar__user">
        <div className="navbar__userName">
          <span>Niharika</span> <span>Bansal</span>
        </div>
        <img
          className="navbar__userImg"
          src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg"
          alt="user-img"
        />
        <div className="nav-caret">
                    <i className="fas fa-caret-down caret"></i>
                </div>
      </div>
    </header>
  );
};

export default withRouter(Nav)
