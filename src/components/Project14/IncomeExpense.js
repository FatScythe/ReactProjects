import { useFourteenProvider } from "./context";

const IncExp = () => {
  const { transactions } = useFourteenProvider();

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, curr) => (acc += curr.amount), 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, curr) => (acc += curr.amount), 0);
  return (
    <div className='inc-exp'>
      <div className='income'>
        <h4>INCOME</h4>
        <p>&#8358;{income}</p>
      </div>
      <div className='underline'></div>
      <div className='expense'>
        <h4>EXPENSE</h4>
        <p>-&#8358;{Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncExp;
