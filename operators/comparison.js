/**
 * Use greater than operator with string
 */

/**
 * Use less than operator with numbers
 */

/**
 * Use greater than equal to AND less than equal to
 * operator with string numbers
 */

/**
 * Write a program to declary the salary of 5 employees
 * named as emp1Salary, emp2Salary .. emp5Salary
 *
 * Compare and print if the salary is greater
 * with emp1 vs emp2
 * with emp2 vs emp3
 * with emp3 vs emp4
 * with emp4 vs emp5
 *
 * Similarly, compare and print if the salary is greater than OR equal to
 * with emp1 vs emp2
 * with emp2 vs emp3
 * with emp3 vs emp4
 * with emp4 vs emp5
 *
 * Similarly, compare and print if the salary is less than
 * with emp1 vs emp2
 * with emp2 vs emp3
 * with emp3 vs emp4
 * with emp4 vs emp5
 *
 * Similarly, compare and print if the salary is less than OR equal to
 * with emp1 vs emp2
 * with emp2 vs emp3
 * with emp3 vs emp4
 * with emp4 vs emp5
 *
 *
 * Store the above values in another variable instead of printing
 * in the console
 */

/**
 * Operator precedence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
 */





let stringNumGreat = "12" >= "10"
let stringNumLess = "43" <= "25"





let salaryOfEmploye = {
    emp1Salary: 25000,
    emp2Salary: 40000,
    emp3Salary: 40000,
    emp4Salary: 27000,
    emp5Salary: 22000
}




// first

function compareSalary(salary1, salary2) {
    if (salary1 > salary2) {
        greater = salary1
    }
    else {
        greater = salary2
    }

}

compareSalary(salaryOfEmploye.emp1Salary, salaryOfEmploye.emp2Salary)
compareSalary(salaryOfEmploye.emp2Salary, salaryOfEmploye.emp3Salary)
compareSalary(salaryOfEmploye.emp3Salary, salaryOfEmploye.emp4Salary)
compareSalary(salaryOfEmploye.emp4Salary, salaryOfEmploye.emp5Salary)

// second-comparison
function compare2Salary(salary1, salary2) {
    if (salary1 >= salary2) {
        greater = salary1
    }
    else {
        greater = salary2
    }
}

compare2Salary(salaryOfEmploye.emp1Salary, salaryOfEmploye.emp2Salary)
compare2Salary(salaryOfEmploye.emp2Salary, salaryOfEmploye.emp3Salary)
compare2Salary(salaryOfEmploye.emp3Salary, salaryOfEmploye.emp4Salary)
compare2Salary(salaryOfEmploye.emp4Salary, salaryOfEmploye.emp5Salary)


// third 



function compare3Salary(salary1, salary2) {
    if (salary1 < salary2) {
        smaller = salary1
    }
    else {
        smaller = salary2
    }
}

compare3Salary(salaryOfEmploye.emp1Salary, salaryOfEmploye.emp2Salary)
compare3Salary(salaryOfEmploye.emp2Salary, salaryOfEmploye.emp3Salary)
compare3Salary(salaryOfEmploye.emp3Salary, salaryOfEmploye.emp4Salary)
compare3Salary(salaryOfEmploye.emp4Salary, salaryOfEmploye.emp5Salary)

// fourth

function compare4Salary(salary1, salary2) {
    if (salary1 = salary2) {
        smaller = salary1
    }
    else {
        smaller = salary2
    }
}

compare4Salary(salaryOfEmploye.emp1Salary, salaryOfEmploye.emp2Salary)
compare4Salary(salaryOfEmploye.emp2Salary, salaryOfEmploye.emp3Salary)
compare4Salary(salaryOfEmploye.emp3Salary, salaryOfEmploye.emp4Salary)
compare4Salary(salaryOfEmploye.emp4Salary, salaryOfEmploye.emp5Salary)


// assignment 2.2 

// let stringGreat = "a" > "b"
// let numericGreat = 28 < 12

// let number = 5 < number < 10;


function findNum() {
    for (num = 0; num <= 10; num++) {
        if (num > 5 && num < 10) {
            console.log(num)
        }
    }
}

findNum()

function findOdd() {
    for (num = 11; num <= 100; num++) {
        if (num % 2 != 0) {
            console.log(num)
        }
    }
}

findOdd()

function findEven() {
    for (num = 11; num < 30; num++) {
        if (num % 2 == 0) {
            console.log(num)
        }
    }
}

findEven()

function findDiv3() {
    for (num = 7; num < 59; num++) {
        if (num % 3 == 0) {
            console.log(num)

        }

    }
}

findDiv3()

// prime 

function findPrime() {
    for (num = 7; num < 50; num++) {
        if (num % 2 == 0) {

        }
        else if (num % 3 == 0) {

        }
        else if (num % 4 == 0) {

        }
        else if (num % 5 == 0) {

        }

        else {
            console.log(num)
        }

    }
}

findPrime()


console.log("sqr")

function findDivSqr9() {
    for (num = 11; num < 100; num++) {
        if (num % (81 ** 0.5) == 0 && num > 10 && num < 100) {
            console.log(num)

        }

    }
}

findDivSqr9()


// assignment 2.4 

let compare1 = 10 > 5 > 1 // false
console.log(compare1)
let compare2 = 10 < 6 > true
console.log(compare2)

