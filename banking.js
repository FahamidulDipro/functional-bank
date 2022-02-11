const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-amount');
    if (isNaN(depositAmount) == true) {
        alert('please enter number');
    } else {
        if (depositAmount > 0) {
            adding('deposit-dollars', depositAmount);
            //Updating Balance
            updateBalance(depositAmount, true);
        } else {
            alert('Please enter valid quantity');
        }
    }




})


//Withdraw
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw-amount');
    const currentBal = getCurrentBalance();
    if (withdrawAmount > 0) {
        if (withdrawAmount > currentBal) {
            alert('Insufficient balance');
        } else {
            adding('withdraw-dollars', withdrawAmount);
            //Updating Balance
            updateBalance(withdrawAmount, false);
        }
    } else {
        alert('Please enter valid quantity');
    }


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


//Get Current Balance
function getCurrentBalance() {
    const balanceAmount = document.getElementById('balance-dollars');
    const balanceAmountText = balanceAmount.innerText;
    const prevBalanceTotal = parseFloat(balanceAmountText);
    return prevBalanceTotal;

}