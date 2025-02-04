import { expenses, addExpense, totalExpenses, filterByDateRange, asyncFetchExpenseReport } from './expenseTracker.js';

addExpense('Groceries', 50, new Date('2024-12-28'));
addExpense('Electricity Bill', 75, new Date('2024-12-27'));

console.log('Total Expenses:', totalExpenses());

const startDate = new Date('2024-12-26');
const endDate = new Date('2024-12-28');
console.log('Expenses within date range:', filterByDateRange(startDate, endDate));

asyncFetchExpenseReport()
    .then(report => console.log(report))
    .catch(error => console.error('Error fetching report:', error));
