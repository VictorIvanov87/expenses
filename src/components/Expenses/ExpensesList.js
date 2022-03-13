import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses, year }) => {
  const filteredExpenses = expenses.filter((e) => e.date.getFullYear() === Number(year));

  return (
    <>
      {filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
      ) : (
        <ul className="expenses-list">
          {filteredExpenses.map((e) => {
            return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ExpensesList;
