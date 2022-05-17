import React from "react";
import styled from "styled-components";
import { SiAdobepremierepro } from "react-icons/si";
import { ImHome3 } from "react-icons/im";
import { BsCalendarPlus } from "react-icons/bs";
import { MdMessage } from "react-icons/md"
import {IoMdHelpCircle} from "react-icons/io"
import { AiTwotoneSetting } from "react-icons/ai";

function Sidebar() {
  return (
    <Aside id="sidebar">
      <div className="brand">
      <SiAdobepremierepro/>
      </div>
      <ul className="links">
        <li className="selected">
        <ImHome3/>
        </li>
        <li>
          <BsCalendarPlus />
        </li>
        <li>
          <MdMessage/>
        </li>
        <li>
          <IoMdHelpCircle />
        </li>
        <li>
          <AiTwotoneSetting />
        </li>
      </ul>
      
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: rgb(53, 65, 94);
  height:100vh 100%;
  width: 10px;
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
   
  }
  svg {
    color: rgb(255, 84, 96);
    font-size: 1.5rem;
  }
  .brand {
    svg {
      font-size: 2.5rem;
      color:rgb(236, 78, 110);
      background-color:white;
     
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    align-items: center;
    padding-bottom:300px;
    padding-left:0;
    
    li {
      border-radius: 1rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: rgb(141, 71, 102);
      }
      &:hover {
        
        svg {
          color:rgb(255, 84, 96);
        }
      }
    }
    .selected {
      
      svg {
        color: white;
        background-color: rgb(236, 78, 110);
        border-radius:15px;
        
      }
    }
    .seleted:hover{
        color:none;
    }
  }
  #sidebar{
    width:30px;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }
  }
`;

export default Sidebar;