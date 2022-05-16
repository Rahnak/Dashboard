import React from "react";
import ProjectCards from "../Components/Project/ProjectCards";
import ProjectTable from "../Components/Project/ProjectTable";
import ToDoList from "../Components/ToDoList/ToDoList";
import "./Dashboard.css";

export default function Dashboard() {
  return <div className="dashboard">
      <div className="todo">
          <ToDoList/>
          <ProjectCards/>
      </div>
  <ProjectTable/>
  </div>;

}
