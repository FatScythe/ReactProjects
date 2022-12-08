import { useContext, useState } from "react";
import { createContext } from "react";

const ElevenContext = createContext();

const ElevenProvider = ({ children }) => {
  const [showSideBar, setshowSideBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSideBar = () => {
    setshowSideBar(true);
  };
  const closeSideBar = () => {
    setshowSideBar(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ElevenContext.Provider
      value={{
        showSideBar,
        closeSideBar,
        openSideBar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ElevenContext.Provider>
  );
};

export const useElevenContext = () => {
  return useContext(ElevenContext);
};
export { ElevenContext, ElevenProvider };
