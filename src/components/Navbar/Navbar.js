import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h3>React Projects</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
