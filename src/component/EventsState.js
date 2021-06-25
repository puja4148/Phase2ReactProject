import React, { Component } from 'react'
import ShowAllEvents from './ShowAllEvents'
import Search from './Search'
import AddComponent from './AddComponent'


class EventsState extends Component {
   
       state={
       
        flag: false,
        SearchEvent : false ,
        events : [
              {
                  Id: '1',
                  EventName: 'New Year Party 2022',
                  Venue: 'The Social',
                  Time: '2:00 PM',
                  Date: '21/06/2021'
              },
              {
                Id: '2',
                EventName: 'StandUp Comedy',
                Venue: 'ShilpaRamam',
                Time: '1:00 PM',
                Date: '19/06/2021'
                
            },
            {
                Id: '3',
                EventName: 'Live Music',
                Venue: '10 Downing Street',
                Time: '8:00 PM',
                Date: '18/06/2021'
            },
             {
                Id: '4',
                EventName: 'Live Music',
                Venue: '10 Downing Street',
                Time: '8:00 PM',
                Date: '11/06/2021'
            },
            {
                IdText: '5',
                EventName: 'Karakoe Night',
                Venue: 'The Rooftop lounge',
                Time: '9:00 PM',
                Date: '08/06/2021'
            }
        ]
        ,
        newEvents : [],  
        teststate : false,
        AddComponentState : false,
        teststate2 : false,
        SearchNotFoundState: false,
        eventArrayPostDeletion : [], 
        SearchEventFlag :false    
  
}

  ClickMe = ()=>{
      this.setState({flag:!this.state.flag})
      this.setState({SearchEvent: false})
      this.setState({teststate: false});
      this.setState({AddComponentState :false})
      this.setState({SearchNotFoundState : false})
      this.setState({SearchEventFlag :true});
    }

  SearchEvent = () =>{
      this.setState({SearchEvent: !this.state.SearchEvent})
      this.setState({flag: false})
      this.setState({teststate: false});
      this.setState({AddComponentState :false});
      this.setState({SearchNotFoundState : false});
      
    }
        
  SearchEventUsingText =(text) => {
   var searchText = text.trim();
    {if (this.state.events.findIndex(item => item.EventName === searchText || item.Venue === searchText) >= 0){
        this.state.newEvents = this.state.events.filter(event=> event.EventName.includes(searchText) || event.Venue.includes(searchText) );
        this.setState({teststate: true});
        this.setState({SearchNotFoundState : false});
    }
      else{
         this.setState({SearchNotFoundState : true});
         this.setState({teststate: false});
            }  

    }
}
AddNewEvent =() => {
    this.setState({AddComponentState :!this.state.AddComponentState})
    this.setState({teststate: false});
    this.setState({flag:false});
    this.setState({SearchEvent: false})
    this.setState({SearchNotFoundState : false})
   
}


       addNewEventToExistingArray=(newEvent)=>{
        this.setState({...this.state, events: [newEvent, ...this.state.events]})
        {alert("Event added successfully. Click  OK to continue! Click on Show All Events to check the refreshed logs.")}
       
      }

      DeleteEventMethod = (id) => {
        this.state.eventArrayPostDeletion = this.state.events.filter(event => event.Id !== id);        
        this.setState({events: this.state.eventArrayPostDeletion})
      }
    
    render() {
      const {EventName,Id} =this.state.events
        return (
           
            <div class= "container">
              <br/>
                
                <button class="btn btn-primary btn-lg" onClick={this.AddNewEvent}>Add Event</button>
                <button class="btn btn-primary btn-lg" onClick={this.SearchEvent}>Search Event</button>
                <button class="btn btn-primary btn-lg" onClick={this.ClickMe}>Show All Events</button>
                <div>
                {this.state.flag ? <ShowAllEvents flag={this.state.SearchEventFlag} key={this.state.events.Id} event={this.state.events} DeleteEventMethod={this.DeleteEventMethod}/> : null}
                </div>
                <div>
                {this.state.SearchEvent ?<div>  <Search  searchEventUsingText={this.SearchEventUsingText}/>  </div>: null}
                </div>
                <div>
                {this.state.teststate ? <ShowAllEvents key={this.state.events.Id}  event={this.state.newEvents}/>   : null}
                </div>
                <div>
                {this.state.AddComponentState ? <AddComponent addNewEventToExistingArray={this.addNewEventToExistingArray}/>   : null}
                </div>
                <div>
                {this.state.SearchNotFoundState ? <h1>Event not found! Try using Exact Event Name or Venue Name!</h1>  : <h1> </h1>}
                </div>
            
             </div>
        )
    }
}
export default EventsState; 