import { FaBars } from "react-icons/fa";
import { useElevenContext } from "./context";
const Home = () => {
  const { openSideBar, openModal } = useElevenContext();

  return (
    <div id='eleven'>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </div>
  );
};

export default Home;
