/**
 * Slice () exracts a section of String
 * and return it as a new String
 * without modifing the original strings
 */

let fullName = "Abu Rayhan"
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ") + 1)
console.log(fullName);
console.log(lastName);