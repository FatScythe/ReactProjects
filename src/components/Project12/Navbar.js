import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useTwelveContext } from "./context";

const Navbar = () => {
  const { OpenSideBar, OpenSubMenu, CloseSubMenu } = useTwelveContext();
  const handleDisplaySubMenu = (e) => {
    const text = e.target.textContent;
    const btn = e.target.getBoundingClientRect();
    const midpoint = (btn.right + btn.left) / 2;
    const bottom = btn.bottom - 3;
    OpenSubMenu(text, { midpoint, bottom });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      CloseSubMenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={OpenSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={handleDisplaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleDisplaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleDisplaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
