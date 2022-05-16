import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import "./Topbar.css";



function Topbar() {
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

  return (
    <div className="container">
    <div className="topContainer">
      <div>
  <nav class="navbar navbar-expand-lg navbar-light" style={{marginLeft:'60px'}}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active" id="nav-title">
        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="#">All Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Members</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Stats</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Help</a>
      </li>
    </ul>
    
  </div>
</nav>
</div>
      <div className="profileContainer">
      <p className="profileName">Olivia Christine</p>
      <p className="designation">Project Manager</p>
        <div className="profileImage">
          
        </div>
        
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>
        
        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>My Profile</li>
            <li>Signout</li>
            
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Topbar;