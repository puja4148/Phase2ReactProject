import React, { Component } from 'react'

 class NewComponent extends Component {
     
    state={
        text: ''
    }
    
    onChange = (e) => {
        this.setState ({text : e.target.value})

    };

    onSubmitfunc =(e) => {
        e.preventDefault();
        this.props.searchEventUsingText(this.state.text);

    }
    render() {
        
        return (
            <div className="container">
              <form onSubmit={this.onSubmitfunc} className="form">
                  
                  <br/>
                  <input type="text"  placeholder="Search with event name" className="text" value={this.state.text} onChange={this.onChange}/> 
                  <br/>
                  <input type="submit"  value="Search" className="btn btn-success  btn-block btn-lg"/>
              </form>
            </div>
        )
    }
}
export default NewComponent; 