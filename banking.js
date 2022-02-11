const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-amount');
    adding('deposit-dollars', depositAmount);
    //Updating Balance
    const balanceAmount = document.getElementById('balance-dollars');
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(depositAmount);
})


//Withdraw
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw-amount');
    adding('withdraw-dollars', withdrawAmount);
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

//Adding function
function adding(input1, input2) {
    const addTotal = document.getElementById(input1);
    addTotal.innerText = parseFloat(addTotal.innerText) + parseFloat(input2);

}