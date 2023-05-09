const btn = document.getElementById("calculate"); 
const bill_amount = document.getElementById("bill-amount");
const tip_amount = document.getElementById("tip-amount");
const total = document.getElementById("total");

function calculateBill() {
  const getBill = bill_amount.value;
  const tip = tip_amount.value;
  const totalValue = getBill * (1 + tip / 100);
  total.innerText = totalValue.toFixed(2);
}


btn.addEventListener("click", calculateBill);