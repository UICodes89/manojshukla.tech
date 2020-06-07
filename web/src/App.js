import React from 'react';
import banner_overlay_1 from './images/banner_overlay_1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import {MainSectionComponent} from './components/MainSectionComponent/MainSectionComponent';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainSectionComponent  />
      <img src={banner_overlay_1} alt=""/>
    </div>
  );
}

export default App;
