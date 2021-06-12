import React, { Component } from 'react';  
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
import LoginLayoutRoute from "./layouts/LoginLayoutRoute";  
import DashboardLayoutRoute from "./layouts/DashboardLayout";  
import  {LoginPage}  from "./pages";
import  {Login}  from "./pages";
import  {UserDetailsPage,Demo, Signup, Products}  from "./pages";
class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/"><Redirect to="/login" /></Route>  
          <LoginLayoutRoute exact path="/login" component={Login} />
          <LoginLayoutRoute exact path="/signup" component={Signup} /> 
          <LoginLayoutRoute exact path="/layout1" component={LoginPage} />  
          <LoginLayoutRoute exact path="/layout3" component={UserDetailsPage} /> 
          <LoginLayoutRoute exact path="/demo" component={Demo} /> 
          <DashboardLayoutRoute exact path="/dashboard" component={UserDetailsPage} /> 
          <DashboardLayoutRoute exact path="/products" component={Products} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;  
// ReactDOM.render(<App />, document.getElementById("app"));