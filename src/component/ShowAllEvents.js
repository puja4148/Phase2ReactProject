import React, { Component } from 'react'

 class EventOptions extends Component {
   
    state={
        Id:'',
        EventName: '',
        Time: '',
        Date:'',
        Venue: ''  
    }


    DeleteEvent = (Id) => {
        
        this.props.DeleteEventMethod(Id);
      
    }
   
    render() {
        
        const {event, flag} = this.props; 
        const { EventName,Time,Date, Venue }= this.state;
        

        return (
            <div >
                <br></br>
                <table className="table table-dark">
                <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Venue</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th> </th>
                </tr>
                </thead>
               
                {event.map(even => (
                   
                           <tbody>
                            <tr>
                          
                            <td >{even.EventName}</td>
                            <td >{even.Venue}</td>
                            <td >{even.Time}</td> 
                            <td >{even.Date}</td> 
                            <td>{flag ?<input type="submit" className="btn btn-block btn-danger"  value="Delete" onClick={this.DeleteEvent.bind(this, even.Id)}></input>:null} </td>
                            </tr>
                            </tbody>
                  
                    
                ))}
                 
                 </table>
            </div>
        )
    }
}
export default EventOptions;