import React, { Component } from 'react'
import ShowAllEvents from './ShowAllEvents'
import  '../App.css'
import {Link} from 'react-router-dom';


 class HeaderSection extends Component {
    render() {
        return (
            <div className="container bgimg">
              
                 
        <nav class=" navbar navbar-expand-sm info-color" >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="App-logo" viewBox="0 0  16 16">
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
  
</svg>
<Link to="/" class="navbar-brand" href="#"><i> <h1>FindMyEvents </h1></i></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
        
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link to="/"  class="nav-link waves-effect waves-light" href="#">
             Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link waves-effect waves-light" href="#">
              <i class="fas fa-gear"></i> About</Link>
          </li>
          <li class="nav-item">
            <Link to="ContactUs" class="nav-link waves-effect waves-light" href="#">
               Contact Us</Link>
          </li>
         
        </ul>
      </div>
    </nav>             
           
            </div> 
        )
    }
}
export default HeaderSection;