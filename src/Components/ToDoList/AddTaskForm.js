import React from "react";
import {IoAddCircle} from 'react-icons/io5';
import {BsThreeDotsVertical} from 'react-icons/bs';
import './Todolist.css'


    const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
     
      
   return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
         <h5>Today To Do List</h5>
         <p>saturday</p>
         <p>29 October 2019</p>
        </div>
        <div className="col-auto">
        <IoAddCircle  className="" onClick={addTask}/>
        
        <div className="col-auto1">
          <div className="dropdown"></div>
          < BsThreeDotsVertical />
         
          
        </div>
        
        </div>
      </div>
      <br />
    </>
  )
};


export default AddTaskForm;
