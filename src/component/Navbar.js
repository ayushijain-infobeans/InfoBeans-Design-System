import react from "react";
import "../style/NavBar.css";

function Navbar() {
    return (
        <nav class="navbar navbar-light ">

            <a class="navbar-brand text-white" href="#">
                <img src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg" class="nav-img" width="128" height="40" />
                <span class="Intranet">Intranet Portal</span>

            </a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Message Board</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Tides</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Applauds</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Gallery</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Jobs</a>
                </li>
                <li class="nav-item text-white">
                    <i class="fas fa-th fa-2x"></i>
                  </li>
{/* <li>
                          <div>Niharikaa</div>
                            <div>Bansal</div>  
                            <div class="user-img">
                            <img src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg"
                                 alt="user-img"/>
                        </div>  
</li> */}
                  {/* <li> */}
                  {/* <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="account-info">
                    <div class="user-name">
                        <div>Niharikaa</div>
                        <div>Bansal</div>
                        <span class="user-img">
                    <img src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg" class="img-user" alt="user-img" />

                </span>
                    </div>
                </div>
                 </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>


                  </li> */}
                {/* <div class="account-info">
                        <div class="user-name">
                            <div>Niharikaa</div>
                            <div>Bansal</div>
                        </div>
                        <div class="user-img">
                            <img src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg"lstyle="width:128px;
     height:40px;
     margin-left: 20px;"
                                 alt="user-img"/>
                        </div>
                        <i class="ibic-caret-down"></i>
                    </div>
                    <div class="dropdown-menu">
                        <ul class="dropdown-menu-items">
                            <li>
                                <a href="#">
                                    <i class="ibic-star"></i>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ibic-star"></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ibic-star"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div> */}
               {/* <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
               <div>Niharika
                        Bansal</div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  Account Setting
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  Logout
                </a>
              </div> */}
                {/* <div class="account-info">
                    <div class="user-name">
                        <div>Niharikaa</div>
                        <div>Bansal</div>
                    </div>
                </div>
                <div class="user-img">
                    <img src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg" class="img-user" alt="user-img" />

                </div>

                <div class="caret-down">
                    <i class="fas fa-caret-down"></i>
                </div> */}
               
            </ul>
        </nav>
    );
}
export default Navbar;
