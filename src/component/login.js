import React from "react";
import "../style/login.css";

function Login() {
    return (
        <div className="login">
            <form className="form-login">
                <nav class="navbar navbar-light">
                    <a class="navbar-brand text-white" href="#">
                        <img src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg"  class ="nav-img" />

                         <span class="Intranet">Intranet Portal</span> 
                    </a>
                </nav>

                <div class="login-container">
                    <div class="logo">
                        <img src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg" />
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <div class="form-field">
                            <input type="text" class="field" placeholder="Your InfoBeans email address" />
                        </div>

                    </div>
<br/>
                    <div class="form-group">
                      
                        <label class="form-label-password">Password   <a class="float-right forgot" href="#">Forgot?</a></label>
                        <div class="form-field">
                            <input type="text" class="field" placeholder="Your Password" />
                        </div>
                    </div>

                    <br/>

                        <button class="button">Login to Intranet Portal</button>
                </div>
            </form>
            <footer class="footer mt-3">
                <p> &copy; Copyright 2020 InfoBeans. All Rights Reserved.</p>
            </footer>

        </div>

    );
}

export default Login;