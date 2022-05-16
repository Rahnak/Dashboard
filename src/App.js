import React from "react";
import "./App.css";
import Demo from "./Components/Topbar/Demo";
import Sidebar from "./Components/Sidebar/Sidebar"
import ToDoList from "./Components/ToDoList/ToDoList";
import Dashboard from "./Pages/Dashboard";




function App() {
  return (
<div className="App">
   
  
 
 <Demo/>
 <div className="container">
 <Sidebar/>
<div className="others">
 <Dashboard/>
</div>
</div>
   </div>
   
  );
}

export default App;
