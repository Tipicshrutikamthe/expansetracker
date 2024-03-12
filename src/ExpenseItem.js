// ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <span>{expense.title}</span>
        <span className="badge bg-primary">${expense.amount}</span>
      </div>
    </li>
  );
};

export default ExpenseItem;
