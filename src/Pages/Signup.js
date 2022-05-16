import React, { Component } from 'react'
import { configpath } from './Config'; 
import axios from 'axios';

export default class AdminSignUp extends Component {
  constructor (props){
    super(props);
     this.state={
       cname: '',
       admn_email:'',
       admn_mob:'',
       admn_pass:'',
       admn_confirmpass:''
     }
   }
   
   AddUser = (e) => {
     console.log("Hello" +this.state.admn_email);
     e.preventDefault();
     const data={
      cname:this.state.cname,
       admn_email:this.state.admn_email,
       admn_mob:this.state.admn_mob,
       admn_pass:this.state.admn_pass,
      admn_confirmpass:this.state.admn_confirmpass
     };
     console.log('email:', data)
     axios.post(configpath+'/AdminSignup/create',data,
    {
      headers:{
        'Content-Type': 'application/json',
        'x-access-token':localStorage.getItem('tokens')
      }
    })
    .then(response=>{
      console.log('hello'+response);
      if(response.data.status==='success'){
        console.log("inside if"+response.data.message);
      }
      alert("Data saved successfully!!!");
    },(error)=>{
      console.log(error);
    })
    }
    handleChange=(e)=> {
      this.setState({[e.target.name]:e.target.value});
    }
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
              <h2 className="text-uppercase text-center mb-5"> Admin Sign Up </h2>

              <form className='was-validated'> 
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">Company Name</label>
                  <input type="text" id="form3Example1cg" name='cname' className="form-control form-control-lg" onChange={this.handleChange} value={this.cname}  />
                 
                </div>

                <div className="form-outline mb-4" >
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  <input  type="email" id="form3Example3cg" name='admn_email' className="form-control form-control-lg" onChange={this.handleChange}value={this.admn_email} />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example2cg">Mobile Number</label>
                  <input type="text" id="form3Example2cg" name='admn_mob' className="form-control form-control-lg" onChange={this.handleChange} value={this.admn_mob} />
                 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cg"> create Password</label>
                  <input type="password" id="form3Example4cg" name='admn_pass' autoComplete='off' className="form-control form-control-lg" onChange={this.handleChange} value={this.admn_pass} />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">Confirm Password</label>
                  <input type="password" id="form3Example4cdg" name='admn_confirmpass' autoComplete='off' className="form-control form-control-lg" onChange={this.handleChange} value={this.admn_confirmpass}/>
                  
                </div>

                

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={this.AddUser}>Sign Up</button>
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
