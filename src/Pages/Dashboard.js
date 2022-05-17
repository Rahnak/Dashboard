import React from "react";
import EventCalender from "../Components/Calendar/EventCalender";
import DataTable from "../Components/Project/DataTable";
import ProjectCards from "../Components/Project/ProjectCards";
import ToDoList from "../Components/ToDoList/ToDoList";
import Charts from "../Components/Charts/Chart"
import "./Dashboard.css";



export default function Dashboard() {
  return <div className="dashboard">
    <div className="maindiv">
      <div className="todo">
          <ToDoList/>
          <ProjectCards/> 
      </div>
      <div className="datatable">
      <DataTable/>
      </div>
      <Charts/>
      </div>

      <div className="sidediv">
      <EventCalender/>
      </div>
      
  </div>;

}
