/**
 * Ternary Oprator = Shortcut for an 'if/else' Statments 
 * 1. Condition with> expression if true > expression if false
 * 
 * condation ? exprIfTrue : ExprIf False
 * 
 */

let adult = chackAge(21)
console.log(adult);

function chackAge(age) {
    // if (age >= 18) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return age >= 18 ? true : false
}


chackWinner(true)
function chackWinner(win) {
    win ? console.log('You Win') : console.log("You Lose")
}