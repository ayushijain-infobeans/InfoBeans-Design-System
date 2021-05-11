import React from 'react'
import { useHistory } from "react-router-dom";
  import "../style/login.css";


const user={
    email:"ayushi@gmail.com",
    password:"ayushi123"
}


function Login() {
  let history=useHistory();
  if(sessionStorage.token){
    history.push("/")
  }

const loginCheck=(e)=>{
  e.preventDefault()
  let email=e.target.elements[0].value;
  let password=e.target.elements[1].value;
  if(email===user.email && password===user.password){
    console.log("true")
    sessionStorage.setItem("token",email)
     history.push("/photoGallery")
  }
  else{
    alert("Invalid Credentials");
  }
}
    return (
    
    <div className="login">
      <div className="header">
        <nav className="navbar  navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              <img
               src= "https://infobeans-design-system.web.app/images/logo-infobeans-white.svg" className="nav-img"/>
                  <span className="Intranet">Intranet Portal</span>
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item text-secondary">
                <i className="fas fa-th fa-2x"></i>
              </li>
              </ul>
          </div>
        </nav>
      </div>
      <div className="login-container">
        <div className="logo">
          <div className="login-Img">
          <img src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg" />
          </div>
          <form onSubmit={loginCheck}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="form-field">
              <input type="text" className="field" placeholder="Your InfoBeans email address" />
            </div>
          </div>
          <br/>
          <div className="form-group">
            <label className="form-field"
            >Password 
              <a href="#"className="float-right forgot">Forgot?</a></label>
            <div className="form-field">
              <input type="password"  className="form-control" placeholder="Your password" />
            </div>
          </div>
          <br/>
          <div className="form-field">
                    <button className="button" >Login to Intranet Portal</button>
                </div>
                </form>
        </div>
      </div>
      <div className="footer">
         
          &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      
      </div>
    </div>
    
    );
}

export default Login

