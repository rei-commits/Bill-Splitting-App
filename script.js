document.addEventListener('DOMContentLoaded', () => {
    //cache one element using getElementById
    const container = document.getElementById('container')
    // Cache at least one element using querySelector
    const billAmountInput = document.querySelector('#billAmount')
    const numPeopleInput = document.querySelector('#numPeople')
    const tipPercentageInput = document.querySelector('#tipPercentage')
    const calculateBtn = document.querySelector('#calculateBtn')
    const resultDiv = document.querySelector('#result')

    // Event Listeners
    calculateBtn.addEventListener('click', calculateBill)
    billAmountInput.addEventListener('input', validateInputs)

    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', resetForm);

    // Iterate over a collection of elements to accomplish some task
    const inputElements = document.querySelectorAll('input')
    inputElements.forEach(input => {
        input.addEventListener('focus', () => input.style.backgroundColor = '#e0f7fa')
        input.addEventListener('blur', () => input.style.backgroundColor = '#ffffff')
    });

    function validateInputs() {
        // Include at least one form and/or input with DOM event-based validation
        if (billAmountInput.value < 0) {
            billAmountInput.setCustomValidity("Bill amount cannot be negative")
        } else {
            billAmountInput.setCustomValidity("")
        }
    }

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

        resultDiv.innerHTML = `Total Amount: $${totalAmount.toFixed(2)}<br>
        Tip Amount: $${tipAmount.toFixed(2)}<br>
        Each Person Owes: $${amountPerPerson.toFixed(2)}`

        resultDiv.style.color = 'green'

        console.log('Calculation done')
    }

    function resetForm() {
        // Clear input fields
        billAmountInput.value = '';
        numPeopleInput.value = '';
        tipPercentageInput.value = '';

        // Clear result display
        resultDiv.innerHTML = '';
    }

    // Create at least one element using createElement and appendChild
    const footer = document.createElement('footer')
    footer.textContent = 'Tip: Always check your bill carefully!'
    container.appendChild(footer)

    // Use DocumentFragment to add templated content
    const fragment = document.createDocumentFragment()
    const template = document.createElement('div')
    template.innerHTML = `<p style="color: blue;">This is a templated message!</p>`
    fragment.appendChild(template)
    container.appendChild(fragment)
})
