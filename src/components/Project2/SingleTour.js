import { useState } from "react";

const SingleTour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour container'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <p className='tour-price'>{price}</p>
        </div>
        <div>
          <p>
            {readMore ? info : info.substring(0, 200)}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>
            not intrested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default SingleTour;
