const account = {
    name: 'Brian Lane',
    expenses: [],
    // addExpense -> description arg, amount arg prob use a push
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    income: [],
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    // getAccountSummary -> 'Brian Lane has a balance of $10. $100 in income. $90 in expenses.'
    getAccountSummary: function () {
        let totalExpense = 0
        let totalIncome = 0

        this.expenses.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        })
        
        this.income.forEach(function (income) {
            totalIncome = totalIncome +income.amount
        })

        let totalBalance = totalIncome - totalExpense

        return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpense} in expenses`
    }
}

// Expenses
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Work', 1000)
console.log(account.getAccountSummary())