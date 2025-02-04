# Expense Tracker

## Objective
This project is an expense tracker that helps users manage and analyze their expenses using asynchronous programming and error handling. It includes functions to add expenses, calculate total expenses, filter expenses by date range, and simulate fetching an expense report asynchronously.

## Features
- **Add Expense**: Adds a new expense to the tracker, ensuring that the amount is positive and the date is valid.
- **Total Expenses**: Calculates the total amount spent using `reduce()`.
- **Filter by Date Range**: Filters expenses that fall within a user-provided date range.
- **Async Fetch Expense Report**: Simulates fetching an expense report asynchronously using a `Promise`. It handles errors if the report fetch fails.
- **Modular Design**: All functions are exported in a module and imported into a separate script for testing.

## Technologies Used
- JavaScript (ES6 features)
- Node.js (for running the script, optional)

## Functions
1. **Add Expense**
   - Adds a new expense object to the list.
   - Validates that `amount` is a positive number and `date` is a valid `Date` object.

2. **Total Expenses**
   - Uses `reduce()` to calculate the total amount spent.

3. **Filter by Date Range**
   - Filters expenses that are within the specified start and end date range.

4. **Async Fetch Expense Report**
   - Simulates fetching an expense report asynchronously using a `Promise`.
   - Logs the report when the Promise resolves or handles errors if the Promise is rejected.
