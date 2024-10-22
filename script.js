import { handleCalculateBtnClick, handleResetBtnClick } from './scripts/eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.querySelector('#billAmount');
    const numPeopleInput = document.querySelector('#numPeople');
    const tipPercentageInput = document.querySelector('#tipPercentage');
    const calculateBtn = document.querySelector('#calculateBtn');
    const resetBtn = document.querySelector('#resetBtn');
    const resultDiv = document.querySelector('#result');
    
    // Event Listeners
    calculateBtn.addEventListener('click', () => handleCalculateBtnClick(billAmountInput, numPeopleInput, tipPercentageInput, resultDiv));
    resetBtn.addEventListener('click', () => handleResetBtnClick([billAmountInput, numPeopleInput, tipPercentageInput], resultDiv));
});
