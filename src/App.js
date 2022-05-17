import React from "react";
import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar"

import Dashboard from "./Pages/Dashboard";
import Topbar from "./Components/Topbar/Topbar";




function App() {
  return (
<div className="App">
   
  
 
 <Topbar/>
 <div className="maincontainer">
 <Sidebar/>
<div className="others">
 <Dashboard/>
 
 
</div>
</div>
   </div>
   
  );
}

export default App;
