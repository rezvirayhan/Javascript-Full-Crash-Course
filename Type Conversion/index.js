// Type Conversion = change the datetype of a value to another

// (String, numbers, booleans)

let age = window.prompt('How Old Are You. ?');
age = Number(age)
console.log(typeof age);
age += 1;
console.log("Happy Birthday ", age, "Years Old");

let x, y, z;
x = Number('3.1416');
y = String(3.1416);
z = Boolean("Pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);