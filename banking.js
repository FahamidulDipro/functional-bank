const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-amount');
    adding('deposit-dollars', depositAmount);
    //Updating Balance
    updateBalance(depositAmount, true);
})


//Withdraw
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw-amount');
    adding('withdraw-dollars', withdrawAmount);
    //Updating Balance
    updateBalance(withdrawAmount, false);
})

//Function for getting input value
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

//Updating Balance
function updateBalance(input, isAdd) {
    const balanceAmount = document.getElementById('balance-dollars');
    if (isAdd == true) balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(input);
    else balanceAmount.innerText = parseFloat(balanceAmount.innerText) - parseFloat(input);
}