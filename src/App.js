import React from "react";
import "./App.css";
import { BrowseRouter as Router, Route, Routes } from 'react-router-dom';
import  Login  from "./Pages/Login";
import Sidebar from "./Components/Sidebar/Sidebar"
import Dashboard from "./Pages/Dashboard";
import Topbar from "./Components/Topbar/Topbar";




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
   

<div className="App">
   
  
 
 <Topbar/>
 <div className="maincontainer">
 <Sidebar/>
<div className="others">
 <Dashboard/>
 
 
</div>
</div>
   </div>
   </Router>
  );
}

export default App;
