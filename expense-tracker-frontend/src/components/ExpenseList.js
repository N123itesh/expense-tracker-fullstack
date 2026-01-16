import React, { useState } from "react";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredExpenses = expenses.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search"
        placeholder="🔍 Search by title or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredExpenses.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td>
              <td>₹{e.amount}</td>
              <td>{e.category}</td>
              <td>{e.expenseDate}</td>
              <td>
                <button className="edit" onClick={() => onEdit(e)}>Edit</button>
                <button className="delete" onClick={() => onDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
