let lowerRange = 0
let higherRange = 100
let answer;

while (!answer) {
    const currentGuess = Math.floor((higherRange + lowerRange) / 2)
    let guess = prompt(`Is your number greater than ${currentGuess}`).toLowerCase()
    if (guess == 'y') {
        lowerRange = currentGuess
    } else if (guess == 'n') {
        higherRange = currentGuess
    } else {
        answer = currentGuess
    }
    console.log(`number between ${lowerRange} and ${higherRange}`)
}
window.alert(`The guess number is ${answer}`)