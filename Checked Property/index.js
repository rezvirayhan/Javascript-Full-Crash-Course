
document.getElementById("myBtn").onclick = function () {
    const myCheckrdBos = document.getElementById("myCheckBos")
    const vistBtn = document.getElementById("vistBtn")
    const MasterCardBtn = document.getElementById("MasterCardBtn")
    const papelCard = document.getElementById("papelCard")

    if (myCheckrdBos.checked) {
        console.log("You Are Subscribed... ");
    }
    else {
        console.log("You are Not Subscribe");
    }
    if (vistBtn.checked) {
        console.log("You Are Paying with a Visa");
    }
    else if (MasterCardBtn.checked) {
        console.log("You Are Paying with a Master Card");
    }
    else if (papelCard.checked) {
        console.log("You Are Paying with a papel Card");
    }
    else {
        console.log("You Must Select a Paymet Card Type Selected");
    }
}