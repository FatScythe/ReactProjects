import { useState } from "react";

const Accordian = ({ title, info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsModalOpen(!isModalOpen)}>
          {isModalOpen ? "-" : "+"}
        </button>
      </header>
      {isModalOpen && <p className='info'>{info}</p>}
    </article>
  );
};

export default Accordian;
