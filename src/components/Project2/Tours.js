import SingleTour from "./SingleTour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2 className='title'>Our Tours</h2>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        return <SingleTour {...tour} key={tour.id} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
