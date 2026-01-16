import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import MonthlySummary from "./components/MonthlySummary";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "./services/expenseService";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const loadExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const onAdd = async (expense) => {
    if (expense.id) {
      await updateExpense(expense.id, expense);
    } else {
      await addExpense(expense);
    }
    setEditExpense(null);
    loadExpenses();
  };

  const onEdit = (expense) => setEditExpense(expense);

  const onDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <MonthlySummary expenses={expenses} />
        <ExpenseForm onAdd={onAdd} editExpense={editExpense} />
        <ExpenseList expenses={expenses} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
