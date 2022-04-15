import React, { createContext } from "react";
import { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSublinksOpen, setisSublinksOpen] = useState(false);
  const [menuInfo, setmenuInfo] = useState({ title: "", cordinates: "" });
  const [data, setdata] = useState({ page: "", links: [] });
  const closeSidebar = () => {
    return setisSidebarOpen(false);
  };
  const openSidebar = () => {
    return setisSidebarOpen(true);
  };
  const closeSubLinks = () => {
    return setisSublinksOpen(false);
  };

  const openSubLinks = (e) => {
    const page = e.target;
    const title = e.target.textContent;
    const Link = sublinks.find((link) => link.page === title);
    setdata(Link);
    const tempLoc = page.getBoundingClientRect();
    const cordinates = {
      center: (tempLoc.left + tempLoc.right) / 2,
      bottom: tempLoc.bottom + 3,
    };

    setmenuInfo({
      ...menuInfo,
      title: title,
      cordinates: cordinates,
    });
    setisSublinksOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSublinksOpen,
        closeSidebar,
        openSidebar,
        closeSubLinks,
        openSubLinks,
        menuInfo,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const UseGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
