/**
 * nested loop = a loop inside of another loop
 * 
 */

let rows = window.prompt("Enter Number Of Rows")
let colums = window.prompt("Enter Number Of Colums")

for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= colums; j += 1) {
        document.getElementById('myLabel').innerHTML += j
    }
    document.getElementById("myLabel").innerHTML += "<br/>"
}