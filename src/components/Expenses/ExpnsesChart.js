import React from 'react';
import Chart from '../Chart/Chart';

const ExpnsesChart = ({ expenses }) => {
  const data = [
    { label: 'Jan', value: 0 },
    { label: 'Frb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dev', value: 0 }
  ];

  for (const expense of expenses) {
    const month = expense.date.getMonth();
    data[month].value += expense.amount;
  }

  return <Chart data={data} />;
};

export default ExpnsesChart;
