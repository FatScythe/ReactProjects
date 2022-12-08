import { useFourteenProvider } from "./context";

const Balance = () => {
  const { transactions } = useFourteenProvider();
  // console.log(transactions);
  const balance = transactions.reduce((acc, curr) => (acc += curr.amount), 0);
  return (
    <div className='balance'>
      <h4>YOUR BALANCE</h4>
      <h2>&#8358;{balance}</h2>
    </div>
  );
};

export default Balance;
