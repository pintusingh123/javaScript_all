const form = document.querySelector("form");

function handleIncome(e) {
    e.preventDefault();
    let income = document.getElementById("income");
    let amount = income.value //string type me he
    let NumAmout = parseInt(amount);
    const result = document.querySelector("#result");
    let totalTax = 0;
  
    if (NumAmout <= 1200000) {
        totalTax = 0;
    } else if (NumAmout <= 1600000) {
        totalTax = (NumAmout - 1200000) * 0.15
    } else if (NumAmout <= 2000000) {
        totalTax = (NumAmout - 1600000) * 0.20 + 60000
    }
    else if (NumAmout <= 2400000) {
        totalTax = (NumAmout - 2000000) * 0.24 + 60000 + 80000
    } else {
        totalTax = (NumAmout - 2400000) * 0.30 + 60000 + 80000 + 100000;
    }
    
    result.textContent = `total Tax : ${totalTax}`;

 



    form.reset()
}
form.addEventListener("submit", handleIncome, false);