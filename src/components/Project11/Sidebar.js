import { FaTimes } from "react-icons/fa";
import { useElevenContext } from "./context";
import { links, social } from "./data";
import logo from "./logo.svg";
const Sidebar = () => {
  const { showSideBar, closeSideBar } = useElevenContext();
  return (
    <aside className={`${showSideBar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className='sidebar-header' onClick={closeSideBar}>
        <img src={logo} alt='logo' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
