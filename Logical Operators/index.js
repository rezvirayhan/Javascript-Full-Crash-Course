/**
 * Give Us the ability to check more than 1 condation 
 * && And (Both Condation must be Trur)
 * ||OR (Either Condation is true)
 */


let temp = 50;
if (temp > 0 && temp < 30) {
    console.log("The Weather Is Good");
}
else {
    console.log("The Weather Is bad");

}

let temp2 = 15;
if (temp2 <= 0 || temp2 >= 30) {
    console.log("The Weather Is Bad");
}
else {
    console.log("The Wather Is Good");
}

