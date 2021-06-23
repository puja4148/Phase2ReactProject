import React, { Component } from 'react'


export default class ContactUs extends Component {
      onChange = (e) => {
        this.setState ( {
            [e.target.name] : e.target.value 
         }  )}
    
    render() {
        return (
          <React.Fragment>
              <div className="container col-md-9 mb-md-0 mb-5">
        <form onSubmit={this.onSubmitfunc} className="form mb-4"  action="mailto:puja_k@dell.com" method="POST">                              
                  <br/>
                <h1 className="text-primary font-weigth-bold text-center">Have a question? We are here to help!</h1>
                 <div className="container row col-md-16">
                 <label>Your Name:  </label>
                  <input type="text" required className="form-control form-control-sm" name="Name" /> <br></br>
                  </div>
                  <div className="container row col-md-16">
                  <label>Your Email id:   </label>
                  <input type="email"  required className="form-control" name="Email" /> <br></br>
                  </div>
                  <div className="container row col-md-16">
                  <label for="exampleFormControlTextarea1"> Query:   </label>
                  <input type="textarea" required placeholder="Enter text!" className="form-control form-control-lg" name="Query" /> <br></br>
                   </div>
                  <input type="submit"  value="Send" className="btn btn-primary btn-md btn-block"/> <br></br>
              </form>
              </div>
    </React.Fragment>
           
        )
    }
}
