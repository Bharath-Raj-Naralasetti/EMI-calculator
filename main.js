function l(){
     p = document.getElementById("loanAmount").value;
     r = document.getElementById("interestRate").value;
     n = document.getElementById("months").value;
     r = (p * (r*0.01))/n;
     result = (p/ n+r).toFixed(2);
document.getElementById("result").innerText= `MONTHLY PAYMENT :${result}`;
}
