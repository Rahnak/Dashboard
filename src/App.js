import React from "react";
import "./App.css";
<<<<<<< HEAD
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
=======
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
<Routes>
  <Route exact path='/' element={<Login/>}></Route>
  <Route  path='/signup' element={<Signup/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
</Routes>
>>>>>>> e793097d52b0fa3ce82015c766359b57f6ffad81
   </Router>
  );
}

export default App;
