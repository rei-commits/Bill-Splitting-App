
import { calculateBill } from './billCalculations.js';
import { updateResult, resetInputs } from './domUtils.js';

export function handleCalculateBtnClick(billAmountInput, numPeopleInput, tipPercentageInput, resultDiv) {
    const billAmount = parseFloat(billAmountInput.value);
    const numPeople = parseInt(numPeopleInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);

    if (isNaN(billAmount) || isNaN(numPeople) || isNaN(tipPercentage) || billAmount <= 0 || numPeople <= 0 || tipPercentage < 0) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
    }

    const billDetails = calculateBill(billAmount, numPeople, tipPercentage);
    updateResult(resultDiv, billDetails);
}

export function handleResetBtnClick(inputs, resultDiv) {
    resetInputs(inputs, resultDiv);
}
