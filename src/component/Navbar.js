import react, { useState } from "react";
import { useHistory } from "react-router-dom"
import "../style/NavBar.css";

function Navbar() {

    let history = useHistory();
    function logout() {
        sessionStorage.removeItem("token");
        history.push("/");
    }

    const [click, setclick] = useState(false);

    const handleClick = () => setclick(!click);
    return (
        <nav className="navbar navbar-light ">

            <a className="navbar-brand text-white" href="#">
                <img src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg" class="nav-img" width="128" height="40" />
                <span className="Intranet">Intranet Portal</span>

            </a>
            <div className= "navbar-head">
                
            </div>
            <div className="navbar__menu">
                <span id="toggle-menu-header" className="ibic-menu"></span>
                <span className="ibic-clear" id="close-menu-header"></span>

                <ul className={click ? "navbar__links active" : "navbar__links"}>
                    <li activeClassName="active">
                        <a>Home</a>
                    </li>
                    <li activeClassName="active">
                        <a>Message Board</a>
                    </li>
                    <li activeClassName="active">
                        <a>Tides</a>
                    </li>
                    <li activeClassName="active">
                        <a>Applauds</a>
                    </li>
                    <li activeClassName="active">
                        <a>Gallery</a>
                    </li>
                    <li activeClassName="active">
                        <a>Jobs</a>
                    </li>
                    <li activeClassName="active">
                        <a onClick={logout}>LogOut</a>
                    </li>
                </ul>
            </div>

            <div className="navbar__icon">

                <i class="fas fa-th fa-2x"></i>

                <i className="ibic-apps"></i>
            </div>
            <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
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
            {/* <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div> */}
        </nav>
    );
}
export default Navbar;
