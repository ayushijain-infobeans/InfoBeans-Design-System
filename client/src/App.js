import './App.css';
import { BrowserRouter,
  BrowserRouter as Router, Route, Switch} 
from "react-router-dom";

import Nav from './component/Navbar'
import Login from './component/login'
import ContactForm from './component/contactform'
import ContactList from './component/contactlist'
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
         <Switch>     
           <Route path="/login" component={Login} />  
            <Route path="/Navbar" component={Nav} /> 
            <Route path="/ContactForm" component={ContactForm}/>
            <Route path ="/ContactList" component={ContactList}/>
         </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
