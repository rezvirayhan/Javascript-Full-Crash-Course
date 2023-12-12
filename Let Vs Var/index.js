/**
 * Variable Scope = where a variable is accesible
 * let = variable are limited to block scope {}
 * var = variable are limited to a function (){}
 * global variable = is declared outside any function
 * (if global , var will change browser window popeties)
 */

for (var i = 1; i <= 3; i += 1) {
    console.log(i);
}
console.log(i);

