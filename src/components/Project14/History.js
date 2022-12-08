import { useFourteenProvider } from "./context";
import Transaction from "./Transaction";

const History = () => {
  const { transactions } = useFourteenProvider();
  return (
    <div className='history'>
      <h3>History</h3>
      <hr />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};

export default History;
