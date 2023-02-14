
/**
 * Divide two numbers (5 different number pairs) and store the result in r1...r5
 */
let r1 = 144 / 4;

let r2 = 195 / 5;

let r3 = 50 / 10;

let r4 = 44 / 11

let r5 = 120 / 30;
/**
 * multiply with different pairs
 */

r1 = 123 * 3
369
r2 = 45 * 80
3600
r3 = 12 * 12
144
r4 = 33 * 12
396
r5 = 17 * 13
221
/**
 * find the remaindeer with different pairs
 */
r1 = 38 % 3
2
r2 = 43 % 5
3
r3 = 120 % 8
0
r4 = 123 % 7
4
r5 = 34 % 6
4

/**
 * substract the number with different pairs
 */
r1 = 34 - 5
29
r2 = 344 - 123
221
r3 = 234 - 44
190
r4 = 43 - 43
0
r5 = 59 - 29
30

/**
 * Divide and then multiply
 */

r1 = 12 / 4 * 2
6
r2 = 45 / 5 * 3
27
r3 = 34 / 12 * 5
14.166666666666668
r4 = 56 / 15 * 8
29.866666666666667
r5 = 34 / 9 * 4
15.11111111111111

/**
 * Multiply and then substract
 */
r1 = 34 * 4 - 34
102
r2 = 23 * 5 - 8
107
r3 = 54 * 5 - 6
264
r4 = 67 * 3 - 3
198
r5 = 23 * 33 - 5
754

/**
 * find the square of number between 2 and 10
 */
r2 = 3 ** 2
9
r3 = 4 ** 2
16
r4 = 5 ** 2
25
r5 = 6 ** 2
36
r5 = 7 ** 2
49
r5 = 8 ** 2
64
r5 = 9 ** 2
81
/**
 * Find 2², 2³, 2⁴ ... 2¹⁰

 */

r1 = 2 ** 2

r2 = 3 ** 2

r3 = 4 ** 2

r4 = 5 ** 2

r5 = 6 ** 2

r5 = 7 ** 2

r5 = 8 ** 2

r5 = 9 ** 2

r1 = 2 ** 2

r1 = 2 ** 3

r1 = 2 ** 4

r1 = 2 ** 5

r1 = 2 ** 6

r1 = 2 ** 7

r1 = 2 ** 8

r1 = 2 ** 9

r1 = 2 ** 10



// operator precendence 

/**
 * Create a variable b and use substraction assignment operator
 */
let b = 52

b = 52 - 10
42
b -= 20
22
/**
 * Create a variable c and use division assignment operator
 */
let c = 34

c = 34 / 17
2
c /= 2
1
/**
 * Create a variable d and use power assignment operator
 */
let d = 45

d = 45 ** 2
2025
d **= 3
8303765625
/**
 * Create a variable e and use addition assignment operator
 */
let e = 40

e = 40 + 20
60
e += 20
80


// compare

/**
 * compare two string with greater than sign
 */
let compare_1 = "mehrab" > "hello"

compare_1
true
/**
 * compare two number with less than sign
 */
compare_1 = 45 < 12
false


/**
 * Find number between 5 and 10
 */

for (i = 6; i < 10; i++) {
    console.log(i)
}


/**
 * find all odd number between 10 and 100
 */

for (i = 11; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


/**
 * find all the even number between 10 and 30
 */

for (i = 11; i < 30; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


/**
 * find number divisible by three and lie between 6 and 60
 */


for (i = 7; i < 60; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

/**
 * find number divisible by square root of 81 and lie between 10 and 100
 */

for (i = 11; i < 100; i++) {
    if (i % 81 ** 0.5 == 0) {
        console.log(i)
    }
}

/**
 * Find the prime number between 10 and 50
 */

for (i = 7; i < 50; i++) {
    let factors = 0;
    for (j = 1; j < i; j++) {
        if (i % j == 0) {
            factors++;
        }
    }
    if (factors <= 2) {
        console.log(i)
    }
}
