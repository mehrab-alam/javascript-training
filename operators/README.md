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

- Substract two numbers (5 different number pairs) and store the result in r1...r5
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

#### Using equality operator (==, ===)

== operator matches the values without caring about the data types, while ==== matches the values and types.

```
let year = '2020';
year == 2020

year === 2020
```

#### Assignment 2.5

a. Create a variable age and assign it from the prompt as shown below. If the age is 24, then print
'You are your peak', else if age is less than 24 then print 'You are too young' and if greater than 24, print 'You are too old'

```
prompt("Input your age ")
```

b. Write a program to guess a number between 0 and 100. Prompt the user to think of a number and then ask questions to find out the right number. Sample question.

Is the number greater than 50? If the user enters 'Y' in the prompt, then ask again : Is the number less than 90, and so on.

### The AND, OR & NOT Operator

##### AND Operator

1. a = true
   b = true
   then a && b is true

2. a = false
   b = true
   OR
   a = true
   b = false
   then
   a && b is false

3. a = false
   b = false
   then
   a && b is false

##### OR Operator

1. a = true
   b = true
   a || b is true

2. a = false
   b = true
   OR
   a = true
   b = false
   then
   a || b is true

3. a = false
   b = false
   then
   a || b is false

##### NOT Operator

1. a = true
   !a is false

2. a = false
   then !a is true

#### Assignment 2.6

1. If we need a range of years between 2020 and 2030, then which Boolean logic operator will be used

2. Given an age and the qualification and the father's name, decide which logic operator will be used when entrace test eligibility rules are as follows:

   Any two among the below should be true
   
   a. age > 20

   b. qualification = "B.Tech"

   c. son of a politician

3. Given students marks in a subject, print out the grade as per the below rules.

   a. marks between 90 - 100 = Grade A
   
   b. marks between 70 - 90 = Grade B
   
   c. marks between 50 - 70 = Grade C
   
   d. marks below 50 = Grade C


#### Switch statement

switch statments allow you to jump directly to a specific statement based on the matched condition. Let's look at an example:

```js
let country = "India"
let price;

switch(country){
   case 'US':
      price = 1000;
      break;
   
   case 'India':
      price = 250;
      break;
   
   case 'China':
      price = 500
      break;
   
   default:
      price = 600
}
```

#### Assignment 2.7

1. Write a program to find the selling price of an item in different state, given the profit percentage as 10% and cost price as 100, and VAT(applied on cost price) based on the state as follows:
   - **Uttar Pradesh** - 12.5%
   - **Madhya Pradesh** - 10%
   - **Bihar** - 15%
   - **Karnataka** - 10%

2. Find the minimum marks required to qualify for an entrance examination, given the category of the student as follows and maximum marks as 500.
   - **OBC** - 65%
   - **SC** - 55%
   - **General** - 75%

#### Expressions

Something that produces a value like:

```
22 + 45
22 > 20
```

Expressions can be used in variety of places like in the if condition, template literal, or while assigning the variable.

### Ternary Operator

This is used when you need to execute single statement or expression if a condition is true or false.

```
const gender = 'male'
const marriageAge = gender == 'male' ? 21 : 18
```

### Assignment 2.8

1. Given the manufacturing year of the vehicle, find if the vehicle registration is valid or not. The manufacturing year is 2010, and registration is valid for 15 years. **Hint** Use the date object to find the current year.

2. Given the pulse rate range for stable patient, find out if the patient with pulse rate as 100 is stable or not.
 
 Stable pulse rate = 65 - 100.

3. Use template literal for the above problems.