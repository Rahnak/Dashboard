import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AdminLogin extends Component {


  handleSubmit = e => {
    e.preventDefault();

    alert("Login Successful");
    window.location='/home'
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
            <img src={require('./login.jpg')} 
                alt="download"
                className="card-img-top" 
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form  className='was-validated'>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" ></i>
                    <span className="h1 fw-bold mb-0">Project Dashboard</span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="validationEmail">Email address</label>
                    <input type="email" id="form2Example17"  className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="inputPassword6">Password</label>
                    <input type="password" id="inputPassword6" className="form-control form-control-lg" />
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={this.handleSubmit} >Login</button>
                  </div>  
                  <p className="mb-5 pb-lg-2" >Don't have an account?</p>
                  <Link to ='/signup'>Register Here</Link>
                     
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