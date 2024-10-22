export function calculateBill(billAmount, numPeople, tipPercentage) {
    const tipAmount = (billAmount * (tipPercentage / 100));
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numPeople;

    return {
        totalAmount: totalAmount.toFixed(2),
        tipAmount: tipAmount.toFixed(2),
        amountPerPerson: amountPerPerson.toFixed(2)
    };
}
