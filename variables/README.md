## Variables & Data types

### How to declare variables

```js
let js = "amazing";
```

### Assignment 1.1

Create 10 variables using a combination of alphabets, numbers, underscore, hyphen and special characters and store number, string or boolean types.

#### Notes about variable

- Never write variables using upper case
- Use camelcase for declaring variables
- Variables must be readable
- Numeric separators can't be used
- Hyphen can't be used as a numeric separator, like:

  ```
   let 12_a = "a"

   Uncaught SyntaxError: Numeric separators are not allowed at the end of numeric literals
  ```

- No special character can be used except underscore and dollar.
- We can't use spaces.
- Only numeric or variables starting with numerics are not allowed
- **$** can be used between alphabets

### Assignment 1.2

- Create variable for storing the department of an employee

- Create a variable for storing name of the teacher of the school

- Create a variable for storing name of the dish item in a restuarant

- Create a variable to store the price of an item in
  an online store

- Create a variable to store the id of the student in a school

- Create a variable to store the account number of a customer in bank

- Display all the variables using `console.log` method, as shown below.

```js
console.log(idStudent);
```

#### Declaring a constant

A constant takes a single value, and the variable cannot be re-assigned another value.

```js
const databaseName = "DB_PRODUCTION";
```

#### Assignment 1.3

Declare 10 constants - c1, c2, ..... c10 ( Use either string or number as the value)

```
const c1 = "constant 1";
```

Try re-assigning the variables and see the error

```
c1 = "constant 2"
```

Display the value of all the 10 constants declared above

### Data types

Data types are of two types - Primitive & Object

Primitive data type

1. Number ( Decimal or integers)

#### Assignment 1.4

- Declare 5 variables that store numbers(integer)

- Declare 5 constants that store numbers(integer)

2.  String - Sequence of characters

example:

```js
let name = "My Name";
```

3. Boolean - Logical type that can be true or false

   Example:

   ```
   let isCountry = true
   ```

   There are few false and true values that are represented as String or numeric.

   - 0 represents false
   - `undefined` value represents false
   - All positive or negative numbers represent true
   - Non-empty String value represents true
   - Empty object represents true

   Example

   ```
   console.log(Boolean({}))
   console.log(Boolean('Axis')
   console.log(Boolean(0))
   ```

#### Assignment 1.5

- Declare 10 variables that store boolean values using the Boolean constructor
- Declare 5 variables that store boolean value 'true'

  Example

  ```
   let isCold = true
   let isOld = true
  ```

- Declare 5 variables that store boolean value 'false'

Javascript has dynamic typing. Value has type, not the variable

#### Assignment 1.6

- Check the type of all the variables declared above using typeof

```
console.log(typeof isCold)
```

- Re-assign the string variables to boolean values and boolean variables to numeric values
  and numeric variables to string values. Now re-display the types of all the variables.

- Declare empty variables - year, month, day
  - Now display the typeof all the variables
  ```js
  console.log(year);
  ```
- Next assign numeric values to all the variables and display the typeof all the above variables

#### Data type conversion

A String data type can be converted into a number using the following type casting method.

```
const year = "2020"
year = Number(year)
typeof year
```

If the String cannot be created to the number, that javascript fails with `NaN`, which means invalid number or Not a Number.

You can also convert number to string using String constructure object.

```
const yearNumber = String('2020')
```

#### Assignment 1.7

Initialize a variable yearOfBirth to your birth year (number). Change this number to string and then back to number.

#### Automatic type coercion

Based on the context, the number is interpreted as string and string is interpreted as a number.

```
console.log("I am " + 22 + " years old")
console.log("22" - 2 - "30")
console.log("22" + 2 + "30")
```

Here the **plus** operator is interpreted as concatenation operator , while the **minus** operator is treated as the arithmetic operator and hence the numbers used in quotes are converted into numbers and not string.

**Note**
It's a bad practice to use type coercion and must be avoided at all cost.
