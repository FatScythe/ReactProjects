import reviews from "./data";
import Review from "./Review";

const Reviews = () => {
  return (
    <main id='three'>
      <div>
        <h2 className='title'>Our Review</h2>
        <div className='underline'></div>
      </div>

      <Review reviews={reviews} />
    </main>
  );
};

export default Reviews;
