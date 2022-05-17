import React, { Component } from 'react'

export default class AdminLogin extends Component {
  constructor(props){
  
    super(props);
    this.state={
      email:'',
      pass:''

    }
  
  }
  

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };
  render() {
    return (
      <div>
          <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
            
               
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form  className='was-validated'>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" ></i>
                    <span className="h1 fw-bold mb-0">Project Management</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="validationEmail">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="inputPassword6" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="inputPassword6">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={this.handleSubmit} >Login</button>
                  </div>    
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    );
  }
}