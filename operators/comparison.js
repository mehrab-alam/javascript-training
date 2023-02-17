// let age = prompt("enter the age")

// if (age == 24) {
// console.log("you are at your peak")
// }
// else if (age < 24) {
// console.log("you are too young")
// }
// else {
// console.log("ypu are too old")
// }



// console.log("Think of a number")


/**
 *  Write a program to guess a number between 0 and 100. Prompt the user to think of a number and then ask questions to find out the right number. Sample question.
 */
// let answer;
// let upperLimit = 100;
// let lowerLimit = 0;


// while (!answer) {
//     let number = Math.floor((upperLimit + lowerLimit) / 2)
//     let user = prompt(`is your number greater than  ${number}`).toLowerCase()
//     if (user == "y") {
//         lowerLimit = number
//     }
//     else if (user == "n") {
//         upperLimit = number
//     }
//     else {
//         answer = number
//     }
// }

// window.alert(`you guessed number is ${answer}`)


/**
 *  If we need a range of years between 2020 and 2030, then which Boolean logic operator will be used
 */

// year = 2022;

// if (year > 2020 && year < 2030) {

// }

/**
 * Given an age and the qualification and the father's name,
 *  decide which logic operator will be used when entrace test eligibility rules are as follows:
 */

// if (age > 20 && qualification == "B.Teach" || age > 20 && fatherIs == "Politician" || qualification == "B.Tech" && fatherIs == "Politician")

/**
 *  Given students marks in a subject, print out the grade as per the below rules.
   a. marks between 90 - 100 = Grade A
   b. marks between 70 - 90 = Grade B
   c. marks between 50 - 70 = Grade C
   d. marks below 50 = Grade C
 */

// if (marks > 90 && marks < 100) {
//     result = "Grade A"
// }
// else if (marks > 70 && marks < 90) {
//     result = "Grade B"
// }

// else if (marks > 50 && marks < 70) {
//     result = "Grade C"
// }

// else if (marks < 50) {
//     result = "Grade C"
// }

/**
 * 
 */


// let state = "state"

// let price = 100
// let sp;

// switch (state) {
//     case 'Utter Pradesh':
//         sp = price + ((12.5 / 100) * price) + (10 / 100 * price)
//         break;
//     case 'Madhya Pradesh':
//         sp = price + ((10 / 100) * price) + (10 / 100 * price)
//         break;
//     case 'Bihar':
//         sp = price + ((15 / 100) * price) + (10 / 100 * price)
//         break;
//     case 'Karnataka':
//         sp = price + ((10 / 100) * price) + (10 / 100 * price)
//         break;
//     default:
//         sp = 150
// }

/**
 * find the minimum to find the SP of an item in defferet state
 */

// let category = ("backward class")
// let minMarks;

// switch (category) {
//     case 'OBC':
//         minMarks = (55 / 100) * 5
//         break;
//     case 'SC':
//         minMarks = (55 / 100) * 5
//         break;
//     case 'General':
//         minMarks = (75 / 100) * 5
//         break;
//     default:
//         minMarks = (50 / 100) * 5

// }


/**
 * Experession
 */

let state = "state"

let price = 100
let sp;

switch (state) {
    case 'Utter Pradesh':
        console.log(`the price of item in U.P is ${price + (12.5 / 100 * price) + (10 / 100 * price)}`)
        break;
    case 'Madhya Pradesh':
        sp = (`the price of itme in M.P is ${price + (10 / 100 * price) + (10 / 100 * price)}`)
        break;
    case 'Bihar':
        sp = (`the price of itme in Bihar is ${price + (5 / 100) * price + (10 / 100 * price)}`)
        break;
    case 'Karnataka':
        sp = (`the price of itme in M.P is ${price + (10 / 100 * price) + (10 / 100 * price)}`)
        break;
    default:
        sp = 150
}
/**
 * expersion for obc and sc?
 */



/**
 * Ternary Operator
 */






let valid = (new Date().getUTCFullYear() - 2010) < 15 ? "true" : "false"

// console.log(` this car's registration valid status: ${valid}`) 

console.log(` this car's registration valid status: ${(new Date().getUTCFullYear() - 2010) < 15 ? "true" : "false"}`)


/**
 * Q 2
 */
let patientPulse = 100


console.log(`the patient is ${patientPulse > 65 && patientPulse < 100 ? "stable" : "not stable"}`)