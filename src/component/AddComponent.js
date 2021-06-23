import React, { Component } from 'react';
import {v1 as uuid} from "uuid"; 

 class AddComponent extends Component {

       
    state={
        Id : '',
        EventName: '',
        Time: '',
        Date:'',
        Venue: ''  
    }
    
    onChange = (e) => {
        this.setState ( {
            [e.target.name] : e.target.value 
        } );

    }

    onSubmitfunc =(e) => {
        e.preventDefault();
        const {EventName,Time,Date,Venue} = this.state;
        const newEvent ={
        Id: uuid(),
        EventName,
        Venue,
        Time,
        Date
                
        }
       
        this.props.addNewEventToExistingArray(newEvent);
         this.setState( { newEvent : ''})

    }

    render() {
        const {EventName,Time,Date, Venue }= this.state;
        
        return (
            <div className="container"> 
          
            
                 <form onSubmit={this.onSubmitfunc} className="form">                              
                  <br/>
                  <label>Enter Event Name :  </label>
                  <input type="text"  required placeholder="Enter Event Name" className="form-control form-control-sm " name="EventName" value={EventName} onChange={this.onChange} /> <br></br>
                 
                 <label>Enter Time :  </label>
                  <input type="time" required className="form-control form-control-sm" name="Time" value={Time} onChange={this.onChange}/> <br></br>
                  <label>Enter Date :  </label>
                  <input type="date"  required className="form-control form-control-sm" name="Date" value={Date} onChange={this.onChange}/> <br></br>
                  <label>Enter Venue :  </label>
                  <input type="text" required placeholder="Enter Venue" className="form-control form-control-sm" name="Venue" value={Venue} onChange={this.onChange}/> <br></br>
                  <input type="submit"  value="Add" className="btn btn-success w-100"/> 
                  <br/>
              </form>
            </div>
        )
    }
}
export default AddComponent;