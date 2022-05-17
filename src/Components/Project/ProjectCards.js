import React from "react";
import './projectCards.css';
import { IoLogoCss3 } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import member from './images/img3.png'
import { colors } from "@material-ui/core";
function ProjectCards() {
  return <div className="maincards">
  <div className="leftcard">
    <div className="logo">
      <IoLogoCss3/>
    </div>
    <div className="details">
     <p className="tittle">Team Members</p> 
     <img src={member} alt="" className="image"/>
     <label for='progress' className="heading">Project Completion    &nbsp; &nbsp;  32%</label>
     <progress value={32} id='progress'max={100} ></progress>
     
    </div>
  </div>
  <div className="rightcard">
  <div className="logo1">
      <TiMessages/>
    </div>
    <div className="details">
     <p className="tittle">Team Members</p> 
     <img src={member} alt="" className="image"/>
     <label for='progress' className="heading">Project Completion    &nbsp; &nbsp;  54%</label>
     <progress value={54} id='progress'max={100} ></progress>
     
    </div>
  </div>
  </div>;
  
}

export default ProjectCards;
