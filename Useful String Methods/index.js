let userName = "Rezvi Rayhan";
let phoneNumber = '01727-979966'
// userName = userName.toLocaleLowerCase // All Lower Case
// userName = userName.toUpperCase // All upper Case
console.log("Length", userName.length);
console.log("charAt", userName.charAt(0));
console.log("indexOf", userName.indexOf("R"));
console.log("lastIndexOf", userName.lastIndexOf("n"));
phoneNumber = phoneNumber.replaceAll('-', '/')
console.log(phoneNumber);