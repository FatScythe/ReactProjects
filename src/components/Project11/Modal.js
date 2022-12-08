import { FaTimes } from "react-icons/fa";
import { useElevenContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useElevenContext();
  return (
    <div
      className={` ${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className='modal-container'>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
  );
};

export default Modal;
