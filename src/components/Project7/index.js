import { useEffect, useState } from "react";
import data from "./data";
import Carousel from "./Carousel";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [people, value]);

  useEffect(() => {
    let timer = setInterval(() => {
      setValue(value + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [people, value]);
  return (
    <div id='seven'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>

      <div className='section-center'>
        <Carousel people={people} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Slider;
