/**
 * Temp Literals delimited with (')
 * lnstad of double single qutes
 * allows embeded variable and expressions
 */

let userName = "Rezvi"
let itmes = 3;
let total = 75;

console.log("Hello", userName);
console.log("You Have", itmes);
console.log("In Total ", total);

let text = `Hello ${userName} You Have ${itmes} in your Cart Your Total Amount $${total} Usd`
console.log(text);

document.getElementById('myLabel').innerHTML = text