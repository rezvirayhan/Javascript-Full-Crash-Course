// Temperature Program 
document.getElementById("Submitbtn").onclick = function () {

    let temp;
    if (document.getElementById("cBtn").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp)
        temp = toCalsius(temp)
        document.getElementById("tempLable").innerHTML = temp + " Cels"
    }
    else if (document.getElementById("fBtn").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp)
        temp = toFarn(temp)
        document.getElementById("tempLable").innerHTML = temp + " Fran"
    }
    else {
        document.getElementById("tempLable").innerHTML = 'Selected a unit'
    }
}








let temp = 32;
temp = toCalsius(temp)

console.log(temp);
function toCalsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFarn(temp) {
    return temp * 9 / 5 + 32;
}