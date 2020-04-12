import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import Student from "./components/Student";
import Navigation from "./components/Navigation";
import history from "./components/History";
import "./styles.css";
import Redirect from "./components/Redirect";

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter history={history}>
      <div class="container">
        <ul>
          <Navigation />
        </ul>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/newroute" component={NewRoute} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentname/:studentno?" component={Student} />
          <Route path="/redirect" component={Redirect} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
