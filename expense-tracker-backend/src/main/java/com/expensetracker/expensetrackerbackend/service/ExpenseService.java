package com.expensetracker.expensetrackerbackend.service;

import com.expensetracker.expensetrackerbackend.entity.Expense;
import java.util.List;

public interface ExpenseService {

    Expense createExpense(Expense expense);

    List<Expense> getAllExpenses();

    Expense getExpenseById(Long id);

    Expense updateExpense(Long id, Expense expense);

    void deleteExpense(Long id);
}
