const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-amount');
    const depositTotal = document.getElementById('deposit-dollars');
    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);

    //Updating Balance
    const balanceAmount = document.getElementById('balance-dollars');
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(depositAmount);
})


//Withdraw
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw-amount');
    const withdrawTotal = document.getElementById('withdraw-dollars');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);

    //Updating Balance
    const balanceAmount = document.getElementById('balance-dollars');
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) - parseFloat(withdrawAmount);
})


//Functional
function getInputValue(input) {
    const inputField = document.getElementById(input);
    const inputAmount = inputField.value;
    inputField.value = '';
    return inputAmount;

}