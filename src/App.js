import React from "react";
import "./App.css";
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
   </Router>
  );
}

export default App;
