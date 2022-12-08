import { createContext, useContext, useState } from "react";
import sublinks from "./data";
const TwelveContext = createContext();

const TwelveProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [location, setLocation] = useState({ midPoint: "", bottom: "" });
  const [page, setPage] = useState({ page: "", links: [] });

  const OpenSideBar = () => {
    setIsSideBarOpen(true);
  };
  const CloseSideBar = () => {
    setIsSideBarOpen(false);
  };
  const OpenSubMenu = (text, location) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(location);
    setIsSubMenuOpen(true);
  };
  const CloseSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <TwelveContext.Provider
      value={{
        isSideBarOpen,
        OpenSideBar,
        CloseSideBar,
        isSubMenuOpen,
        OpenSubMenu,
        CloseSubMenu,
        page,
        location,
      }}
    >
      {children}
    </TwelveContext.Provider>
  );
};

export const useTwelveContext = () => {
  return useContext(TwelveContext);
};

export default TwelveProvider;
