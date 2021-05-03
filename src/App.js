import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { SignUp } from "./components/pages/SignUp";
import { Footer } from "./components/Footer.js";
import "./App.css";



function App() {
  return (
    <Router>
      <h1>YES</h1>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;