import { useState } from "react";
import "./nine.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#04A66D").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      const colors = new Values(color).all(10);
      setList(colors);
    } catch {
      setError(true);
    }
  };
  return (
    <div id='nine'>
      <h3>Generate Tints and Shades of a color</h3>
      <section className='nine-container'>
        <h3>Color Generator: </h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#04A66D'
            className={`${error ? "error" : null}`}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((colors, index) => {
          return (
            <SingleColor
              key={index}
              {...colors}
              index={index}
              hex={colors.hex}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ColorGenerator;
