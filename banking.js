const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function() {
    // const depositInput = document.getElementById('deposit-amount');
    // const depositAmount = depositInput.value;

    // //Get current deposit
    // const depositTotal = document.getElementById('deposit-dollars');
    // const depositTotalText = depositTotal.innerText;
    // depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount);

    // //Updating Balance
    // const balanceTotal = document.getElementById('balance-dollars');
    // const balanceTotalText = balanceTotal.innerText;
    // balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);
    // //Clearing input field
    // depositInput.value = '';

    const depositTotal = getInputValue('deposit-amount', 'deposit-dollars');


})


//Withdraw
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function() {
    // const withdrawInput = document.getElementById('withdraw-amount');
    // const balanceTotal = document.getElementById('balance-dollars');

    // const withdrawAmount = withdrawInput.value;
    const withdrawTotal = getInputValue('withdraw-amount', 'withdraw-dollars');

    //Get current withdraw
    // const withdrawTotal = document.getElementById('withdraw-dollars');
    // const withdrawTotalText = withdrawTotal.innerText;
    // withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmount);
    // balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawInput.value);
    // withdrawInput.value = '';
})


//Functional
function getInputValue(input1, input2) {

    const depositInput = document.getElementById(input1);
    const depositAmount = depositInput.value;

    //Get current deposit
    const depositTotal = document.getElementById(input2);
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount);
    depositInput.value = '';
    return depositTotal;

}