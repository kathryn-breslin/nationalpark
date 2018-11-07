import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Park from "./pages/Park/Park.js";
import User from "./pages/User/User.js";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/parks" component={Park}/> */}
      <Route exact path="/api/parks/:id" component={Park}/>
      <Route exact path="/user" component={User}/>
      <Route exact path="/api/user/:id" component={User}/>
    </div>
  </Router>

);

export default App;
