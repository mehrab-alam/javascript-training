### How to declare variables

```js
let js = "amazing"
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
console.log(idStudent)
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

