#### Functions

Functions are the building blocks for the software. Typically a software would consists of hundreds of small features,
and each of these small feature would be built by one or more small functions. Now lets take a look at a function which checks if an individual has legal age to marry in India.

The legal age for men is above 21 years and for women its 18 years.

```js
function isLegalToMarry(gender, age) {
  if (gender == "male" && age < 21) {
    return false;
  } else if (gender == "male" && age >= 21) {
    return true;
  } else if (gender == "female" && age < 18) {
    return false;
  } else if (gender == "female" && age >= 18) {
    return true;
  } else {
    return false;
  }
}
```

As you can see above, every function takes 0 or more parameters. In this case it accepts two params, age of the individual and gender.

Now let's use ES6 arraow function to declare the above function, which is recommended by functional programmers to write function in a manner that can be composed by larger functions.

```js
const isLegalToMarry = (gender, age) => {
  if (gender == "male" && age < 21) {
    return false;
  } else if (gender == "male" && age >= 21) {
    return true;
  } else if (gender == "female" && age < 18) {
    return false;
  } else if (gender == "female" && age >= 18) {
    return true;
  } else {
    return false;
  }
};
```

#### Assignment 4.1

1. Write an arrow function to find the highest marks. Function definition should be as below.

```
const highestMarks = (math,phy,chem) => ???
```

2. Write an arrow function to get the age of the child, based on the year of birth. Function definition should be as below

```
const ageOfChild = (yearOfBirth) => ???
```

3. Write an arrow function to check if the child is eligible for admission to pre-nursery school, based on the age of the child. The minimum age should be 3 years.

```
const isEligibleForAdmission = (yearOfBirth) => ???
```

4. Write an arrow function to validate the warranty of the mobile based on the purchase date. The warranty is for 18 months.

```
const isWarrantyValid = (purchaseDate) => ???
```
