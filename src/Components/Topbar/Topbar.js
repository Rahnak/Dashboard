import React, { useEffect } from "react";
import styled from "styled-components";
import {  FaChevronDown } from "react-icons/fa";
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
    <div className="topcontainer">
      <div>
  <nav class="navbar navbar-expand-lg" >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li  id="nav-title">
        <a className="topicons-active" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li >
        <a  className="topicons" href="#">All Projects</a>
      </li>
      <li >
        <a className="topicons" href="#">Members</a>
      </li>
      <li >
        <a className="topicons"  href="#">Stats</a>
      </li>
      <li >
        <a className="topicons"  href="#">Help</a>
      </li>
    </ul>
    
  </div>
</nav>
</div>
      <div className="profileContainer">
        <div className="prodetails">
      <p className="profileName">Olivia Christine</p>
      <p className="designation">Project Manager</p>
      </div>
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

export default Topbar;