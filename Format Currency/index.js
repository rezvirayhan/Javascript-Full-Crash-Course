/**
 * toLocalString () = returns a string with a languge sestive representation of this number;
 * number .toLocalString(locle, {options})
 * locale = specify that language (undified) = defulat set in browser
 * options = object with formatting options
 */

let myNum = 123456.789;
// myNum = myNum.toLocaleString("en-Us") // Us English
// myNum = myNum.toLocaleString("hi-IN") // HIndi
// myNum = myNum.toLocaleString("de-DE") // Standred Generator
// myNum = myNum.toLocaleString("en-Us", { style: "currency", currency: "USD" }) // Us English

myNum = myNum.toLocaleString("BDT", { style: "Take", currency: "INR" }) // Us English
console.log(myNum);