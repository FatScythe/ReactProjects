import { useState, useRef } from "react";
import "./eight.css";
import { AiOutlineCopy } from "react-icons/ai";

const WordGenerator = () => {
  const [value, setValue] = useState(0);
  const [baby, setBaby] = useState("no");
  const [text, setText] = useState([]);
  const paragraphContainer = useRef(null);
  const copyContainer = useRef(null);

  const fetchDummyText = async (value, baby) => {
    const number = baby === "no" ? 0 : 1;

    const response = await fetch(
      `https://hipsum.co/api/?type=hipster-centric&paras=${value}&start-with-lorem=${number}`
    );
    const data = await response.json();
    setText(data);

    return data;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchDummyText(value, baby);
  };

  const handleCopy = () => {
    const textContent = paragraphContainer.current.textContent;
    navigator.clipboard.writeText(textContent);
    copyContainer.current.textContent = `
                Copied`;
    setTimeout(() => {
      copyContainer.current.textContent = `
                Copy Text`;
    }, 2000);
  };

  return (
    <div id='eight'>
      <section className='section-center'>
        <h3>Tired of boring lorem ipsum</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='amount'>Paragraphs:</label>
            <input
              type='number'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name='amount'
              id='amount'
            />
            <label htmlFor='baby'>Start with Baby ?</label>
            <select value={baby} onChange={(e) => setBaby(e.target.value)}>
              <option value='yes'>yes</option>
              <option value='no'>no</option>
            </select>
          </div>

          <div>
            <button type='submit' className='btn'>
              Generate
            </button>
          </div>
        </form>

        {text.length !== 0 && (
          <article className='result'>
            <div>
              <div className='btn' onClick={handleCopy}>
                <AiOutlineCopy />
                <span ref={copyContainer}>Copy Text</span>
              </div>
            </div>
            <section ref={paragraphContainer}>
              {text.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
              })}
            </section>
          </article>
        )}
      </section>
    </div>
  );
};

export default WordGenerator;
