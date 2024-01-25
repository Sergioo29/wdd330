function renderExpenses(expenses){
    const html = expenses.map(expenseTemplate);
};

function expenseTemplate(expense){
    return `<tr>
    <td>${expense.description}</td>
    <td>${expense.amount}</td>
    `
}

export function saveExpenses(expense){
console.log("Saved");
const expenses = JSON.parse(localStorage.getItem('expenses'));
expenses.push(expense);
localStorage.setItem('expenses', JSON.stringify(expenses));
renderExpenses(expense);
};

