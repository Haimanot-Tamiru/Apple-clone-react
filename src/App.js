
import React, { Component } from "react";
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

  //my components
import Nav from "./Components/Nav-/Nav";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
// Pages
import Iphone from "./Pages/Iphone/Iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";


//function based components
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
