// App.js
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css'; // Import the CSS file

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Tracker</h1>
      <div className="row">
        <div className="col-md-6">
          <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
        <div className="col-md-6">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
