import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Navigation from "./component/Navigation";
import Student from "./component/Student";
import History from "./History";
import Redirect from "./component/Redirect"
const NewRoute = () => {
  return ( 
    <div>
      <p>New Route</p>
    </div>
   );
}



class App extends React.Component {
  render() { 
    return ( 
      <BrowserRouter history={History}>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/student/:studentname/:studentno?" component={Student} />
            <Route path="/redirect" component={Redirect} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;
