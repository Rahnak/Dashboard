import React, { useEffect } from "react";
import styled from "styled-components";
import {  FaChevronDown } from "react-icons/fa";
import "./Topbar.css";
function Navbar() {
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
    <div className="topContainer">
      <div>
  <nav class="navbar navbar-expand-lg" >
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
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 2rem;
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    margin-bottom: 0;
    .timeline {
      gap: 1rem;
    }
  }
`;

export default Navbar;