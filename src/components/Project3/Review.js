import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const Review = ({ reviews }) => {
  const [index, setindex] = useState(0);
  const { image, job, name, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    if (number === index) return index + 1;
    return number;
  };

  const prevPerson = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    setindex(checkNumber(random));
  };
  //   setTimeout(prevPerson, 10000);

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
