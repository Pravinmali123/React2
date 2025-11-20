import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.css";
import Header from "./Components/C_header";
import Home from "./Components/home";
import AppAbout from "./Components/C_About";
import Servises from "./Components/C_servises";
import Works from "./Components/C_works";  
import Teams from "./Components/C_teames"; 
// import NoTransitionExample from "./Components/C_test";

// import Pricing from "./Components/C_pricing";
import Blog from "./Components/C_blog";
import Contact from "./Components/C_contect";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Contact from "./Components/C_contact";
function Corporate() {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <AppAbout></AppAbout>
            <Servises></Servises>
            <Works></Works>
            <Teams></Teams>  
            <Blog></Blog>
            <Contact></Contact>
          {/* <NoTransitionExample></NoTransitionExample> */}
             {/* <Router>
             <Switch>
            <Route exact path="/">
            <Home />
            </Route>

            
          <Route path="/about">
            <AppAbout />
          </Route>

            <Route path="/services">
            <Servises />
            </Route>

            <Route path="/works">
            <Works />
            </Route>

            <Route path="/teams">
            <Teams />
            </Route>

            <Route path="/blog">
            <Blog />
            </Route>



              <Route path="/contact">
            <Contact />
            </Route>
         
        
        </Switch>
          </Router>  */}
        </div>
    );
}
export default Corporate;