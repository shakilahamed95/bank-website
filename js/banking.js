document.getElementById('deposite-button').addEventListener('click', function () {
    const dipositeAmount = document.getElementById('deposite-amount');
    const dipositeMoney = dipositeAmount.value;
    const currentDiposite = document.getElementById('total-amount');
    const primaryDiposite = currentDiposite.innerText;
    const newDepositeTotal = parseInt(primaryDiposite) + parseInt(dipositeMoney);
    currentDiposite.innerText = newDepositeTotal;
    dipositeAmount.value = '';
    const balance = document.getElementById('my-balance');
    const balancetotal = balance.innerText;
    const newBalanceTotal = parseInt(balancetotal) + newDepositeTotal;
    balance.innerText = newBalanceTotal;


})