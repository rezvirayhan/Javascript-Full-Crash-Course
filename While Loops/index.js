/**
 * While Loop = Repate Some Code 
 * While Some Condation 
 * Potentially Infinte
 */

let userName = "";
while (userName == "" || userName == null) {
    userName = window.prompt("Enter Your Name: ")
}
console.log("Hello", userName);

// while(1==1){
// console.log("Help I'm Stuck In An Infinite Loop"); 
// }