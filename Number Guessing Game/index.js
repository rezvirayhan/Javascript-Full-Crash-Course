// Number Guessing Game 

const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0;

document.getElementById('SubmitBtn').onclick = function () {

    let guess = document.getElementById('guessFiled').value
    guesses += 1

    if (guess == answer) {
        alert(`${answer} Is The #. It took you ${guesses} guesses`)
    }
    else if (guess < answer) {
        alert("To Small")
    }
    else {
        alert("To Large")
    }

}
