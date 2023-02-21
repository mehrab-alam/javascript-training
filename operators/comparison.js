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

let price = 100
let profit = 10

switch (state) {
    case 'UP':
        console.log(`The price of the item is ${price + (profit / 100 * price) + (12.5 / 100 * price)}`)
        break;

    case 'MP':
        console.log(`The price of the item is ${price + (profit / 100 * price) + (10 / 100 * price)}`)
        break;
    case 'Bihar':
        console.log(`The price of the item is ${price + (profit / 100 * price) + (5 / 100 * price)}`)
        break;

    case 'Karnataka':
        console.log(`The price of the item is ${price + (profit / 100 * price) + (10 / 100 * price)}`)
        break;

    default:
        break;
}