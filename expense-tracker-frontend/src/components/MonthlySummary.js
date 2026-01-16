import React from "react";

const MonthlySummary = ({ expenses }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTotal = expenses
    .filter((e) => {
      const date = new Date(e.expenseDate);
      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    })
    .reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="summary">
      <h3>📅 This Month Total</h3>
      <p>₹ {monthlyTotal}</p>
    </div>
  );
};

export default MonthlySummary;
