import { useEffect, useState } from "react";
import "./two.css";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const OurTours = () => {
  useEffect(() => {
    fetchTours();
  }, []);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return (
      <main id='two'>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main id='two'>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main id='two'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default OurTours;
