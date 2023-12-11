let a;
let b;
let c;

a = window.prompt("Enter Side Of A: ");
a = Number(a)

b = window.prompt("Enter Side Of B: ");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
console.log("Side Of C:.. ", c);