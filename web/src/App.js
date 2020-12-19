import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import {MainSectionComponent} from './components/MainSectionComponent/MainSectionComponent';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {Blog} from "./components/BlogComponent/BlogComponent";
import {Portfolio} from  './components/Portfolio/Portfolio';
import {Contact} from './components/ContactComponent/ContactComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <HeaderComponent />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact  />
          </Route>
          <Route path="/">
            <MainSectionComponent  />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
