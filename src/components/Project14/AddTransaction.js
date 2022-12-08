import { useState, useRef } from "react";
import { useFourteenProvider } from "./context";

const Add = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const textInput = useRef(null);
  const amountInput = useRef(null);

  const { handleAdd } = useFourteenProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      textInput.current.style.border = "0";
      amountInput.current.style.border = "0";
      handleAdd(text, amount);
      setText("");
      setAmount(0);
      return;
    }

    textInput.current.style.border = "1px solid red";
  };

  return (
    <div className='add'>
      <h4>Add new Transaction</h4>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='text'>Text</label>
        <input
          value={text}
          ref={textInput}
          type='text'
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter text...'
        />
        <p>(negative - expense, positive - income)</p>
        <label htmlFor='Amount'>Amount</label>
        <input
          value={amount}
          ref={amountInput}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Enter amount...'
          type='number'
        />
        <button type='submit'>Add Transaction</button>
      </form>
    </div>
  );
};

export default Add;
