import { useState } from "react";
import Accordian from "./Accordian";
import data from "./data";

const Questions = () => {
  const [Questions, setQuestions] = useState(data);
  return (
    <main id='four'>
      <div className='container'>
        <h3>Frequently asked Questions</h3>

        <section className='info'>
          {Questions.map((Question) => {
            return <Accordian key={Question.id} {...Question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Questions;
