import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showNewExpenseFormOpened, setShowNewExpenseFormOpened] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {showNewExpenseFormOpened ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setShowNewExpenseFormOpened(false)}
        />
      ) : (
        <button
          onClick={() =>
            setShowNewExpenseFormOpened((showNewExpenseFormOpened) => !showNewExpenseFormOpened)
          }>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
