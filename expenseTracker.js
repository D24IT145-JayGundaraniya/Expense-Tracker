export const expenses = [];

export function addExpense(description, amount, date) {
    if (description && typeof amount === 'number' && amount > 0 && date instanceof Date) {
        expenses.push({ description, amount, date });
    } else {
        console.error('Invalid expense data');
    }
}

export function totalExpenses() {
    let total = 0;
    for (const expense of expenses) {
        total += expense.amount;
    }
    return total;
}

export function filterByDateRange(startDate, endDate) {
    return expenses.filter(expense => expense.date >= startDate && expense.date <= endDate);
}

export function asyncFetchExpenseReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (expenses.length) {
                resolve(`Expense Report: ${expenses.length} expenses, Total: ${totalExpenses()}`);
            } else {
                reject('No expenses to report');
            }
        }, 2000);
    });
}