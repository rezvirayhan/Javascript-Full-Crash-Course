/**
 * Do while loop = do something
 * then check the condition 
 * repeat if condition is true;
 * 
 */

let userName;
do {
    userName = window.prompt("Enter Your Name:. ")
} while (userName == "");
console.log('Hello ', userName);