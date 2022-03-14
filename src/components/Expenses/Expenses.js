import { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import NewExpense from '../NewExpense/NewExpense';
import ExpnsesChart from './ExpnsesChart';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

const Expenses = () => {
  const [currentFilter, setCurrentFilter] = useState(2021);
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onFilterChange={setCurrentFilter} />
      <ExpnsesChart expenses={INITIAL_EXPENSES} />
      <ExpensesList expenses={INITIAL_EXPENSES} year={currentFilter} />
    </>
  );
};

export default Expenses;
