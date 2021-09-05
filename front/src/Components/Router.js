import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Mate from "Routes/Mate";
import Project from "Routes/Project";
import Login from "Routes/Login";


const router = () => {
  
  
  return(
    <Router>
      <>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/mates" component={Mate}></Route>
          <Route path="/projects" component={Project}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </Router> 
)};

export default router;
