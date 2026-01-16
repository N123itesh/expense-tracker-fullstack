import React, { useEffect, useState } from "react";

const ExpenseForm = ({ onAdd, editExpense }) => {
  const [expense, setExpense] = useState({
    title: "",
    description: "",
    amount: "",
    category: "",
    expenseDate: "",
  });

  useEffect(() => {
    if (editExpense) {
      setExpense(editExpense);
    }
  }, [editExpense]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(expense); // ✅ THIS EXISTS NOW
    setExpense({
      title: "",
      description: "",
      amount: "",
      category: "",
      expenseDate: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={expense.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={expense.description} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={expense.amount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={expense.category} onChange={handleChange} />
      <input name="expenseDate" type="date" value={expense.expenseDate} onChange={handleChange} required />

      <button className="btn">
        {editExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
