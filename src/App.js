import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Login from './component/login'
import photoGallery from './component/photoGallery'
function App() {
  return (
    <div className="App">
<Router>
         <Switch>
           {/* <Route path="/home" component={Home} /> */}
           <Route path="/login" component={Login} />
           <Route path="/photoGallery" component={photoGallery}/>
           {/* <Route path="/" component={Home} /> */}
         </Switch>
      </Router> 
      {/* <Login /> 
<photoGallery/> */}
    </div>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// // import Home from "./Home";
// // import Login from "./Login";
// // import Nav from "./Nav";

// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       {/* <Nav />
//       <Router>
//         <Switch>
//           <Route path="/home" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/" component={Home} />
//         </Switch>
//       </Router> */}
//     </div>
//   );
// }

// export default App;



