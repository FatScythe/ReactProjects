import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Carousel = ({ people, value, setValue }) => {
  return (
    <>
      {people.map((person, personIndex) => {
        const { id, image, name, quote, title } = person;
        let position = "nextSlide";
        if (personIndex === value) {
          position = "activeSlide";
        }
        if (
          personIndex === value - 1 ||
          (value === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className='person-img' />

            <h4>{name}</h4>
            <div className='title'>{title}</div>
            <div className='text'>{quote}</div>
            <div className='icon'></div>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button className='prev' onClick={() => setValue(value - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setValue(value + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Carousel;
