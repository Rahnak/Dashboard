import React, { Component } from 'react'


export default class AdminSignUp extends Component {
  
  handleSubmit = e => {
    e.preventDefault();

    alert("Account Created Successful");
    window.location='/'
  };
      
   
  render() {
    return (
      
          <div>
        <section className=" bg-image" >
  <div>
    <div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card"  style={{margin: '20px'}} >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"> User Sign Up </h2>

              <form className='was-validated'> 
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                  <input type="text" id="form3Example1cg" name='cname' className="form-control form-control-lg"  />
                 
                </div>

                <div className="form-outline mb-4" >
                <label className="form-label" htmlFor="form3Example3cg"> Email Id</label>
                  <input  type="email" id="form3Example3cg" name='admn_email' className="form-control form-control-lg"  />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example2cg">Mobile Number</label>
                  <input type="text" id="form3Example2cg" name='admn_mob' className="form-control form-control-lg" />
                 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cg"> Create Password</label>
                  <input type="password" id="form3Example4cg" name='admn_pass' autoComplete='off' className="form-control form-control-lg" />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">Confirm Password</label>
                  <input type="password" id="form3Example4cdg" name='admn_confirmpass' autoComplete='off' className="form-control form-control-lg" />
                  
                </div>

                

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={this.handleSubmit}>Sign Up</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/" className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    )
  }
}
