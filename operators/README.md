### Operators

There are different types of operators supported in Javascript.

#### Arithmetic operators

Arithmetic operators are addition,substraction, division and many more .

Example:

```
let result = 3  - 1
```

Here the variable will store a numeric value

#### Assignment 2.1

- Divide two numbers (5 different number pairs) and store the result in r1...r5

  Example:

  ```js
  let r1 = 100 / 4;
  ```

- Multiply two numbers (5 different number pairs) and store the result in r1...r5

- Divide two numbers (5 different number pairs) and store the result in r1...r5
- Find remainder of two numbers (5 different number pairs) and store the result in r1...r5

Example

```js
let r1 = 5 % 4;
```

- Divide and then multiply (5 different variations) and store the result in r1 ... r5

Example:

```
let r1 = 5/4*3
```

- Multiply and then substract(5 variations) and store the result in r1 ... r5
- Find square of all the numbers between 2 & 10
- Find 2², 2³, 2⁴ ... 2¹⁰

#### Operator precedence

The mathematical operations follow a well defined order based on the following precedence [table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table).

```js
let x = 10;
x = 10 * 5;
x *= 10;
```

Here the variable `x` will be first multiplied by 10, using its previous value and not assigned the value 10.

#### Assignment 2.2

- Create a variable a and use multiplication assignment operator
- Create a variable b and use substraction assignment operator
- Create a variable c and use division assignment operator
- Create a variable d and use power assignment operator
- Create a variable e and use addition assignment operator

### Comparator Operator

Compares two string or numbers

#### Assignment 2.3

- Use greater than operator with string
- Use less than operator with numbers
- Find all the numbers between 5 and 10
- Find odd numbers between 10 and 100
- Find even numbers between 10 and 30
- Find prime numbers between 5 and 50
- Find all numbers divisible by 3 and lie between 6 and 60
- Find all numbers divisible by square root of 81 and lie between 10 and 100

Understanding operator precedence for the comparator operator

```
const spFlipkart = 25000
const spAmazon = 25500
const profitAmazon = spAmazon - 20000
const profitFlipkart = spFlipkart - 19000

console.log(spAmazon - 20000 > spFlipkart - 19000)
```

#### Assignment 2.4

Guess the output of the following operations

```
10 > 5 > 1
```

```
10 < 6 > true
```

```
10 == 6 < true
```
