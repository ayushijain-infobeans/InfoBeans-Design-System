import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from './component/Navbar'
import Login from './component/login'
import ContactForm from './component/contactform'
import ContactList from './component/contactlist'
function App() {
  return (
    <div className="App">
<Router>
         <Switch>
            {/* <Route path="/login" component={delete} />  */}
           <Route path="/login" component={Login} />  
           {/* <Route path="/photoGallery" component={photoGallery}/> */} 
            <Route path="/Navbar" component={Nav} /> 
            <Route path="/ContactForm" component={ContactForm}/>
            <Route path ="/ContactList" component={ContactList}/>
         </Switch>
      </Router> 
    </div>
  );
}

export default App;
