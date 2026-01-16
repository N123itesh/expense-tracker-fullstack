package com.expensetracker.expensetrackerbackend.service;

import com.expensetracker.expensetrackerbackend.entity.Expense;
import com.expensetracker.expensetrackerbackend.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseServiceImpl(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    @Override
    public Expense createExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense getExpenseById(Long id) {
        return expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));
    }

    @Override
    public Expense updateExpense(Long id, Expense expense) {
        Expense existing = getExpenseById(id);

        existing.setTitle(expense.getTitle());
        existing.setDescription(expense.getDescription());
        existing.setAmount(expense.getAmount());
        existing.setCategory(expense.getCategory());
        existing.setExpenseDate(expense.getExpenseDate());

        return expenseRepository.save(existing);
    }

    @Override
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }
}
