import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import  {LoginPage}  from "../pages";
import  {Login}  from "../pages/Login";
import  {Signup}  from "../pages/Signup";
import  {UserDetailsPage, Demo, Products}  from "../pages";

const Router = () => (
  <Switch>
    <Redirect from="/" to="/login"/>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/layout1" component={LoginPage} />
    <Route path="/dashboard" component={UserDetailsPage} />
    <Route path="/products" component={Products} />
    <Route path="/demo" component={Demo} />
    
  </Switch>
);

export default Router;