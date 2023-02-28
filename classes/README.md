#### Classes and Objects

You can create an object with initialization by mentioning the attribute names every time, as shown below.

```
const person = {
    name: "ABC"
    age: 32
}

const ram = {
    name: "RAM",
    age: 33
}
```

As you can see above, the attribute names are getting repeated. Therefore we will be creating objects using constructor functions.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

The above function takes the name and age as the parameter and uses its value to initialize the object's variables - name and age. Now we can create multiple objects using this function constructor.

```js
let p = new Person("abc", 22);
```

Now let's add some static attribute to this constructor function. This attribute can be accessed using the function name.

```js
> Person.dataType = "object"
'object'
> Person.dataType
'object'
```

We can also add static methods, that can be accessed using the function name.

```js
Person.display = function () {
  console.log(`I am a human, 100 years old`);
};

> Person.display()
I am a human, 100 years old
```

#### Assignment 5.1

1. Write a function constructor to create an object of Course, where the course would be having following properties:

- courseId(number)
- name(string)
- durationInMonths(number)
- eligibility(string)
- startDate(date)

Create 3 courses and store in an array - `courses`

- Filter the courses that have already started.
- Filter the courses that will start in next 7 days.
- Filter the courses that will start in a month
- Filter the courses that have already been completed.

Create a function constructor `Student` with the following properites:

- studentId(number)
- name(string)
- age(string)
- qualification(string)

Create a function constructor `Application` with the following attributes:

- applicationId(number)
- applicationState(string - accepted/rejected/applied)
- applicant(number)
- courseId(number)

Make sure you use the `applicant` corresponds to the `studentId` in the student's object and `courseId` corresponds to the `courseId` in the Course object.

Create an array of 10 `applications` that consist of **Application** objects.

- Write a function to find all the students whose applications were rejected.
- Write a function to find the students who only applied to two courses.
- Write a function to find the courses, for which there are less than 5 applications.
- Write a function to find the students, who are not eligible to any of the courses.
