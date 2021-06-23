import logo from './logo.svg';
import HeaderSection from './component/HeaderSection';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAllEvents from './component/ShowAllEvents';
import { Component } from 'react';
import EventsState from './component/EventsState';
import About from './component/Pages/About';


import  "./App.css";
import Home from './component/Pages/Home';
import ContactUs from './component/Pages/ContactUs';



function App() {
  return (
    <Router>
    <div className="App bgimg">
      <header className="App-header">
        <HeaderSection />  
        {/* <EventsState/> */}
        <Switch>    
         <Route exact path="/" component={EventsState}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/" component={Home}/>
         <Route exact path="/ContactUs" component={ContactUs}/>
        </Switch>     
        
      </header>
    </div>

    </Router>
  );
}


export default App;