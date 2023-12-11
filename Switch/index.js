/**
 * Switch = Statment that examines a value 
 * for a match against many case cluses.
 * more efficient that many "else if " Statments
 */
let grade = "A";

if (grade == "A") {
    console.log("You Ded Grat");
}
else if (grade == "B") {
    console.log("You Did Good");
}
else if (grade == "C") {
    console.log("You Did Okay");
}
else if (grade == "D") {
    console.log("You Passed....Barely!");
}
else if (grade == "F") {
    console.log("Sorry You Are FAILED!");
}
else {
    console.log(grade, "Is Not a grade");
}

switch (true) {
    case grade:
        console.log('You Did Grat');
        break;
    case "B":
        console.log('You Did Good');
        break;
    case "C":
        console.log('You Did Okay');
        break;
    case "D":
        console.log('You Passed....Barely!');
        break;
    case "F":
        console.log('Sorry You Are FAILED!');
        break;
    default: {
        console.log(grade, "Is Not a grade");
    }
}


let grade2 = "88";

switch (true) {
    case grade2 >= 90:
        console.log('You Did Grat');
        break;
    case grade2 >= 80:
        console.log('You Did Good');
        break;
    case grade2 >= 70:
        console.log('You Did Okay');
        break;
    case grade2 >= 60:
        console.log('You Passed....Barely!');
        break;
    case grade2 > 60:
        console.log('Sorry You Are FAILED!');
        break;
    default: {
        console.log(grade2, "Is Not a grade");
    }
}