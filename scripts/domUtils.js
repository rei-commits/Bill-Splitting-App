export function updateResult(resultDiv, billDetails) {
    resultDiv.innerHTML = `Total Amount: $${billDetails.totalAmount}<br>
    Tip Amount: $${billDetails.tipAmount}<br>
    Each Person Owes: $${billDetails.amountPerPerson}`;
    resultDiv.style.color = 'green';
}

export function resetInputs(inputs, resultDiv) {
    inputs.forEach(input => input.value = '');
    resultDiv.innerHTML = '';
}
