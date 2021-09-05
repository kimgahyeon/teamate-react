import React, { useState, } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Footer from "Components/Footer";

import Home from "Routes/Home";
import Mate from "Routes/Mate";
import MateDetail from "Routes/MateDetail"
import Project from "Routes/Project";
import Login from "Routes/Login";
import ProjectDetail from "Routes/ProjectDetail";

const router = () => {

  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/mate" exact component={Mate}></Route>
          <Route path="/mate/:id" component={MateDetail}></Route>

          <Route path="/project" component={Project}></Route>
          <Route path="/project/:id" component={ProjectDetail}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
        <Footer />
      </>
    </Router>
  )
};

export default router;
