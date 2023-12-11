// Easy Way with a window promt

// let userName = window.prompt("What Is Your Name: ")

// console.log(userName);

let userName;

document.getElementById("myBtn").onclick = function () {
    userName = document.getElementById("myText").value;
    console.log(userName);
    document.getElementById("mylabel").innerHTML = "Hello " + userName;
}