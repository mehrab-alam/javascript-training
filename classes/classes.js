/**
 * 
#### Assignment 5.1

1. Write a function constructor to create an object of Course,
 where the course would be having following properties:

- courseId(number)
- name(string)
- durationInMonths(number)
- eligibility(string)
- startDate(date)

 */


function Course(courseId, name, durationInMonths, eligibility, startDate) {
    this.courseId = courseId;
    this.name = name;
    this.durationInMonths = durationInMonths;
    this.eligibility = eligibility;
    this.startDate = startDate
}
/**
 * Create 3 courses and store in an array - `courses`

- Filter the courses that have already been completed.
 */

const course1 = new Course(0, "Javascript", 12, "graduation", new Date("2022-12-27"))

const course2 = new Course(1, "Python", 10, "matriculation", new Date("2023-8-12"))

const course3 = new Course(2, "Java", 24, "B-Tech", new Date("2023-3-7"))

const course4 = new Course(3, "Reacr.js", 8, "MBBS", new Date("2023-3-27"))
const course5 = new Course(3, "node.js", 8, "MBBS", new Date("2021-3-27"))


let arrayOfCourses = [course1, course2, course3]
/**
- Filter the courses that have already started.
 *  
 */
const coursesAlreadyStarted = (arrayOfCourses) => {
    return arrayOfCourses.find(c => c.startDate.getTime() > new Date().getTime())
}
/**
- Filter the courses that will start in next 7 days.
 * 
 */

const coursesStartInSevenDays = (arrayOfCourses) => {
    arrayOfCourses.filter(c => (c.startDate.getTime() - new Date().getTime()) > 604800000)
}

/**
- Filter the courses that will start in a month
 * 
 */

const FilterTHeCourses = (arrayOfCourses) => {
    return arrayOfCourses.filter(c => (c.startDate.getTime() - new Date().getTime()) < 2628002880)
}


/**
 * Create a function constructor `Student` with the following properites:

- studentId(number)
- name(string)
- age(string)
- qualification(string)
 */


function Student(studentId, name, age, qualification) {
    this.studentId = studentId;
    this.name = name;
    this.age = age;
    this.qualification = qualification
}

const student1 = new Student(1, "Suraj", "20", "intermediateries")
const student2 = new Student(2, "Rahul", "23", "Graduation")
const student3 = new Student(3, "Rajeev", "22", "Graduation")

let arrayOfStudents = [student1, student2, student3]
/**
 * Create a function constructor `Application` with the following attributes:

- applicationId(number)
- applicationState(string - accepted/rejected/applied)
- applicant(number)
- courseId(number)
 */

function Application(applicationId, applicationState, applicant, courseId) {
    this.applicationId = applicationId;
    this.applicationState = applicationState
    this.applicant = applicant;
    this.courseId = courseId
}

const application1 = new Application(1, "rejected", 3, 2)
const application2 = new Application(2, "accepted", 2, 0)
const application3 = new Application(3, "applied", 1, 1)
const application4 = new Application(4, "applied", 1, 1)

const application5 = new Application(3, "rejected", 3, 2)
const application6 = new Application(3, "rejected", 2, 0)
const application7 = new Application(2, "rejected", 4, 1)
const application8 = new Application(1, "accepted", 5, 2)
const application9 = new Application(1, "accepted", 6, 2)
const application10 = new Application(3, "accepted", 7, 1)

let arrayOfApplication = [application1, application2, application3, application4, application5, application6, application7, application8, application9, application10]
/**
 * - Write a function to find all the students whose applications were rejected.
 * 
 */


const applicationRejected = (arrayOfApplication, arrayOfStudents) => {
    let appStatus = arrayOfApplication.filter(f => f.applicationState == "rejected")
    let studentId = appStatus.map(c => c.applicant)
    return arrayOfStudents.find(s => s.studentId == studentId)
}

/**
- Write a function to find the students who only applied to two courses.
 * 
 */const listStudentWithTwoCourses = (arrayOfApplication, arrayOfCourses, arrayOfStudents) => {
    let courseIds = arrayOfCourses.map(c => c.courseId)
    let courses = arrayOfApplication.filter(a => a.co)
}

