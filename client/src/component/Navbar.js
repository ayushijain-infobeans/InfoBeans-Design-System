import React from "react";
import { useHistory } from "react-router-dom"


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
            <a>Home</a>
          </li>
          <li>
            <a>Contact Form</a>
          </li>
          <li>
            <a>Display Data</a>
          </li>
        
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>

      <div className="navbar__icon">
        <i className="ibic-apps"></i>
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
        <i className="ibic-caret-down"></i>
      </div>
    </header>
  );
};

export default Nav;