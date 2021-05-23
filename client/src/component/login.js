import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import "../style/login.css";
const user={
    email:"ayushi@gmail.com",
    password:"ayushi123"
}

function Login() {
 
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  
  
  let history=useHistory();
  if(sessionStorage.token){
    history.push("/")
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password){
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
}
   
const emailValidate=(e)=>{
  let email=e.target.value;
  console.log(email.length)
  if(!validateEmail(email)){
    console.log("Invalid Email")
    setIsValid(false);
    setMessage('Enter a valid email!');
    toast("Invalid Email");
    
  }
  else{
    console.log("valid Email")
    setIsValid(true);
      // setMessage('Your email looks good!');
  }
  if(email==0){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
    setMessage();
    toast("Email is Required");
  }
}


const passwordValidate=(e)=>{
  let password=e.target.value;
  console.log(password.length)
  if(!validatePassword(password)){
    console.log("Invalid Password")
    setIsValid(false);
    setMessage('Enter a valid password!');
    toast("Invalid Password");
    
  }
  else{
    console.log("valid Password")
    setIsValid(true);
      // setMessage('Your email looks good!');
  }
  if(password==0){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
    setMessage();
    toast("Password is Required");
  }
}

const loginCheck=(e)=>{
  e.preventDefault();
  let email=e.target.elements[0].value;
  let password=e.target.elements[1].value;
  
  if(email===user.email && password===user.password){
    console.log("true")
    sessionStorage.setItem("token",email)
     history.push("/contactform")
  }
  else{
    // alert("Invalid Credentials");
    toast.error("Invalid Credentials");
  }
}
   return (
    <>

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
                <i className="fas fa-th "></i>
              </li>
              </ul>
          </div>
        </nav>
      </div>
      <br/><br/><br/>
      <div className="login-container">
        <div className="logo">
          <div className="login-Img">
          <img src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg" />
          </div>
          <form  onSubmit={loginCheck}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="form-field">
              <input type="text" className="field" placeholder="Your InfoBeans email address"
               onChange={(e)=>emailValidate(e)} />
            </div>
            <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
          </div>
          <br/>
          <div className="form-group">
            <label className="form-field"
            >Password 
              <a href="#"className="float-right forgot">Forgot?</a></label>
            <div className="form-field">
              <input type="password"  className="form-control" placeholder="Your password" onChange={(e)=>passwordValidate} />
            </div>
            <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
          </div>
          <br/>
          <div className="form-field">
                    <button className="button" >Login to Intranet Portal</button>
                </div>
                </form>
        </div>
      </div>
      <div className="footer-login">
         
          &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      
      </div>
    </div>
    {/* <ToastContainer /> */}
    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
</>
    );
}

export default Login

