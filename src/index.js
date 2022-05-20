import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Servicebook from './components/servicebook';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="/signup">
         <Signup/>
       </Route>
       <Route path="/servicebook">
         <Servicebook/>
       </Route>
     </Switch>
   </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
