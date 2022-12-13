import { links } from "./components/Navbar/data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id='home'>
      <h2>14+ React Projects</h2>
      <div className='links'>
        {links.map((to) => {
          const { id, name, link, img } = to;
          return (
            <Link to={link} key={id}>
              <button>{name}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
