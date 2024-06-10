domcument.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount')
    const numPeopleInput = document.getElementById('numPeople')
    const tipPercentageInput = document.getElementById('tipPercentage')
    const calculateBtn = document.getElementById('calculateBtn')
    const resultDiv = document.getElementById('result')

    calculateBtn.addEventListener('click', calculateBill)

    function calculateBill() {
        const billAmount = parseFloat(billAmountInput.value)
        const numPeople = parseInt(numPeopleInput.value)
        const tipPercentage = parseFloat(tipPercentageInput.value)

        if (isNaN(billAmount) || isNaN(numPeople) || isNaN(tipPercentage) || billAmount <= 0 || numPeople <= 0 || tipPercentage < 0) {
            resultDiv.textContent = 'please enter valid numbers.'
            return
        }

        const tipAmount = (billAmount * (tipPercentage / 100))
        const totalAmount = billAmount + tipAmount
        const amountPerPerson = totalAmount / numPeople

        // Debugging values
        console.log('Tip Amount:', tipAmount)
        console.log('Total Amount:', totalAmount)
        console.log('Amount per person:', amountPerPerson)


        resultDiv.textContent = `Total Amount: $${totalAmount.toFixed(2)}
        Tip Amount: $${tipAmount.toFixed(2)}
        Each Person Owes: $${amountPerPerson.toFixed(2)}`;
    }
});