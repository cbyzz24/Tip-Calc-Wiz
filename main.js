const billAmt = document.getElementById("billAmt");
const tipPct = document.getElementById("tipPct");
const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");
const resultDisplay = document.getElementById("resultDisplay");
const totalAmtDisplay = document.getElementById("totalAmtDisplay");


function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}

billAmt.onchange = setTwoNumberDecimal;
tipPct.onchange = setTwoNumberDecimal;


function calculateTip(){
    tipAmt = (billAmt.value * (tipPct.value/100));
    resultDisplay.innerText = tipAmt.toLocaleString("en-US", {style: "currency", currency: "USD"});
    billTotal = (billAmt.value * (1+(tipPct.value/100)));
    totalAmtDisplay.innerText = billTotal.toLocaleString("en-US", {style: "currency", currency: "USD"});
}

function clearEntries(){
    billAmt.value = "$0.00";
    tipPct.value = "0.00%";
    resultDisplay.innerText = "$0.00";
    totalAmtDisplay.innerText = "$0.00";
}