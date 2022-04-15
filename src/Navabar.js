import React from "react";
import logo from "./images/logo.svg";
import { UseGlobalContext } from "./AppProvider";
import { FaBars } from "react-icons/fa";
const Navabar = () => {
  const { openSidebar, openSubLinks, closeSubLinks } = UseGlobalContext();
  const handleRemove = (e) => {
    const cursorPosition = e.target;
    if (!cursorPosition.classList.contains("link-btn")) {
      closeSubLinks();
    }
  };
  return (
    <nav className="nav" onMouseMove={handleRemove}>
      <div className="nav-header">
        <img src={logo} alt="stripe" className="logo" />
        <button className="bars" onClick={openSidebar}>
          <FaBars className="bars-icon" />
        </button>
      </div>
      <ul>
        <li>
          <button onMouseOver={(e) => openSubLinks(e)} className="link-btn">
            products
          </button>
        </li>
        <li>
          <button onMouseOver={(e) => openSubLinks(e)} className="link-btn">
            developers
          </button>
        </li>
        <li>
          <button onMouseOver={(e) => openSubLinks(e)} className="link-btn">
            company
          </button>
        </li>
      </ul>
      <button className="signIn-btn"> Signin</button>
    </nav>
  );
};

export default Navabar;
