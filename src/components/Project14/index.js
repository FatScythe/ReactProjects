import "./fourteen.css";
import Header from "./Header";
import Balance from "./Balance";
import IncExp from "./IncomeExpense";
import History from "./History";
import Add from "./AddTransaction";

const ExpenseTracker = () => {
  return (
    <main className='expense-tracker'>
      <div className='container'>
        <Header />
        <Balance />
        <IncExp />
        <History />
        <Add />
      </div>
    </main>
  );
};

export default ExpenseTracker;
