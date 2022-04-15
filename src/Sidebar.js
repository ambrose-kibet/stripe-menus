import React from "react";
import { UseGlobalContext } from "./AppProvider";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = UseGlobalContext();
  return (
    <section
      className={isSidebarOpen ? "sidebar-container show" : "sidebar-container"}
    >
      <div className="modal-overlay"></div>
      <div className="sidebar">
        <button className="close-sidebar" onClick={closeSidebar}>
          <FaTimes className="close-icon" />
        </button>
        {sublinks.map((item, index) => {
          return (
            <article className="main-link" key={index}>
              <h4>{item.page}</h4>
              <div className="sublink-container">
                {item.links.map((links, linkIndex) => {
                  return (
                    <a href={links} key={linkIndex} className="sublink">
                      <span>{links.icon}</span>
                      {links.label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
