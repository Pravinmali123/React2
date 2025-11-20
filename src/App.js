// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import Footer from './Footer';
import Corporate from './Corporate';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
        {/* <Router>
             <Switch>
              <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          </Router>  */}

        <Corporate />
    </div>
   
  
   
   
  );
}

export default App;
