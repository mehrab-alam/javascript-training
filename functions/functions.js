

/**
 * Write an arrow function to find the highest marks. Function definition should be as below.
 */

// const highestMarks = (maths, phy, chem) => {
//     if (maths >= phy && maths >= chem) {
//         return `highest marks in maths ${maths}`
//     }
//     else if (chem >= phy && chem >= maths) {
//         return `highest marks in chem ${chem}`
//     }
//     else {
//         return `highest marks in phy : ${chem}`
//     }
// }



// console.log(highestMarks(52, 53, 62))



/**

 * Write an arrow function to get the age of the child, based on the year of birth. Function definition should be as below
 */


// const ageOfChild = (yearOfBirth) => {
//     return (new Date().getUTCFullYear() - yearOfBirth)
// }

// console.log(ageOfChild(1980))


/**
 *  Write an arrow function to check if the child is eligible for admission to pre-nursery school, based on the age of the child. The minimum age should be 3 years.
 */

// const isEligibleForAdmission = (yearOfBirth) => {
//     if (ageOfChild(yearOfBirth) <= 3) {
//         return `age: ${ageOfChild(yearOfBirth)} year , yes student is eligible for admission `
//     }
//     else {
//         return "not eligible"
//     }
// }

// console.log(isEligibleForAdmission(2021))


/**
 * Write an arrow function to validate the warranty of the mobile based on the purchase date. The warranty is for 18 months.
 */


const isWarrantyValid = (purchaseDate) => {
    new Date().getTime() - new Date(purchaseDate).getTime() < 47304051840 ? true : false
}

console.log(isWarrantyValid())

/**
 * Write an arrow function, `calculateAge` to find the age of the person based on yearOfBirth. Then use this function to create another function, checkEligibility if he is eligible for entrance examination for civil services, given the age range of 21 to 30 years. 
 * 
 *
 */
const calculateAges = (yearOfBirth) => new Date().getUTCFullYear() - yearOfBirth;

const checkEligibility = (yearOfBirth) => {
    const age = calculateAges(yearOfBirth);
    return age >= 21 && age <= 30
}

let a = "mehra"

/**
 * 
 */

const getRetirementYear1 = yearOfBirth => {
    const age = calculateAges(yearOfBirth);
    console.log(`his current age is ${age} and will retire in ${(60 - age) + new Date().getUTCFullYear()}`)
}


const getRetirementYear2 = (yearOfBirth, calculateAgesFunc) => {
    const age = calculateAgesFunc(yearOfBirth);
    console.log(`his current age is ${age} and will retire in ${(60 - age) + new Date().getUTCFullYear()}`)
}


/**
 * higher order function
 */

fruits = ["mango", "banana", "apple", "guava"]

/**
 * array.every
 * 
 * The every method calls the predicate function for each element 
 * in the array until the predicate returns a value which is coercible to
 *  the Boolean value false, or until the end of the array.
 */
fruits.every(x => x.length > 4)
//answer = True
/**
 * findLast =  return the last element of the array
 */

fruits.findLast(x => x)
// answer = "guava"
/**
 * fruits.includes = it will return the boolean value wheather this element included in it or not
 */
fruits.includes("apple")
// answer = True
/**
 * fruits.reverse = it will reverse the element in the array
 */

fruits.reverse()
//answer = [ 'guava', 'apple', 'banana', 'mango' ]

/**
 * splice = it will remove the element and return the element and also can add any element
 */

fruits.splice(0, 1, "kiwi")

//answer = [ 'guava' ]
// [ 'kiwi', 'apple', 'banana', 'mango' ] 


/**
 * concat - add string or number  at last
 */
fruits.concat("peach")
// answer = [ 'kiwi', 'apple', 'banana', 'mango', 'peach' ]

//findLastIndex = finds the last index of the array
fruits.findLastIndex(x => x)
// [ 'kiwi', 'apple', 'banana', 'mango' ]
// answer = 3

//indexOf = finds the index of a particular element
fruits.indexOf("banana")
// answer = 2

/**
 * pop = remove and return last index of array
 */

fruits.pop()
// answer = mango
// [ 'kiwi', 'apple', 'banana' ]

/**
 * fill = change the array with the inserting array
 */



fruits.fill("kiwi", 0, 2)
// answer = ["kiwi","kiwi","kiwi"]

/**
 [ 'kiwi', 'apple', 'banana' ]
 * 
 * shift = Removes the first element from an array and returns it. If the array is empty
, undefined is returned and the array is not modified.

 */

fruits.shift()

// output = kiwi
// ["apple","banana"]
/**
 * unshift = inserts new elements at the start of an array,
 *  and returns the new length of the array.
 */
fruits.unshift("mango")
// output = ["mango","apple","banana"]
/**
 * Returns a date converted to a string using the current locale.
 */
fruits.toLocaleString()

/**
 * construct = Constructs the target with the elements of specified array as the
 *  arguments and the specified constructor as the new.target value.
 */

fruits.constructor()
// [["mango","apple","banana"],["mango","apple","banana"]]
/**
 * flat = returns a new array with all sub-array elements 
 * concatenated into it recursively up to the specified depth.
 */

fruits.flat()
//output = ["mango","apple","banana","mango","apple","banana"]


/**
 * join = join all the elements of array
 */

fruits.join("")
//output = "mango,apple,banana,mango,apple,banana"

/**
 * push = Appends new elements to the end of an array, and returns the new length of the array.
 */

fruits.push("grapes")
//output = ["mango","apple","banana","mango","apple","banana","grapes"]

/**
 * slice = the index to the beginning of the specified portion of stringObj.
Returns a section of a string.
 */

fruits.slice()

// output = "mango" 
/**
 * toString = change the array to string
 */
fruits.toString()
//"apple","banana","mango","apple","banana","grapes"

/**
 * flatmap = the flatMap method calls the callback function one time for each element in the array.
 */
fruits.flatMap(x => x)
// [ [ 'apple', 'banana' ], [ 'apple', 'banana' ] ]
//output = ["apple",mango]
/**
 * keys = Returns the names of the enumerable string properties and methods of an object.
 */
fruits.keys()

/**
 * reduce = A function that accepts up to four arguments.
 *  The reduce method calls the callbackfn function one time for each element in the array.
 */
fruits.reduce(x => x.length < 5)
//output = ["banana"] problem

/**
 * some = The some method calls the predicate 
 * function for each element in the array until the predicate returns a value
 *  which is coercible to the Boolean value true, or until the end of the array.
 */
fruits.some(x => x.length > 4)
// output = true
/**
 * emteries =
 */
fruits.entries()


fruits.findIndex(x => x)
// output = 0 problem
/**
 * lastInsexOf = return the index number of last element
 */

fruits.lastIndexOf()
//output = -1
/**
 * sort = arrange the items in ascending or descending
 * [1,5,3,7,32,8]
 */
fruits.sort((a, b) => a - b)
// output = [1,,3,5,7,8,32]

fruits.values()
// problem


// assignment 4.3


/**
 *  1. Create an array `marks` that stores the marks of a student in all the subjects. 
 * Convert the this array of marks to an array of `grades` based on the following rule.
  
    a. Grade 'A' for marks between 80 and 100
    
    b. Grade B for marks between 60 and 80

    c. Grade C for marks between 40 and 60

    d. Grade 'D' for marks below 40
 */


let marks = [75, 65, 85, 49, 52, 38, 53]

let grades = []

let marksGrade = marks.map(mark => {
    if (mark > 80 && mark <= 100) {
        grades.push("A")
    }
    else if (mark > 60 && mark <= 80) {
        grades.push("B")
    }
    else if (mark > 40 && mark <= 60) {
        grades.push("C")
    }
    else {
        grades.push("D")
    }
}
)
console.log(grades)

/**
 * 2. Create an array of array to store the marks scored in all the subjects in all the
 *  8 semesters of an engineering program and
 *  then merge all the marks and calculate the grades based on the above grades rule.
 */

let semMarks = [[45, 67, 34, 69, 89, 23],
[55, 37, 34, 29, 29, 43],
[65, 47, 54, 89, 69, 63],
[75, 87, 74, 79, 59, 53],
[55, 27, 64, 69, 89, 63],
[35, 97, 94, 99, 49, 73],
[72, 77, 74, 49, 99, 83],
[45, 47, 54, 39, 80, 93],]

let mergMark = semMarks.flat()

mergMark.map(mark => {
    if (mark > 80 && mark <= 100) {
        grades.push("A")
    }
    else if (mark > 60 && mark <= 80) {
        grades.push("B")
    }
    else if (mark > 40 && mark <= 60) {
        grades.push("C")
    }
    else {
        grades.push("D")
    }
}
)
console.log(grades)

/**
 * class assignment
 */
let student_1 = {
    name: "Mehrab",
    age: 22,
    marks: [78, 98, 54, 34, 56],
    isStudent: true,
    bornDate: new Date("2000-06-06"),
    sayHello: () => console.log("hello everyone")
}

let student_2 = {
    name: "Aslam",
    age: 20,
    marks: [48, 58, 64, 54, 46],
    isStudent: true,
    bornDate: new Date("2002-08-06"),
    sayHello: () => console.log("hello everyone")
}

let student_3 = {
    name: "Usman",
    age: 18,
    marks: [78, 58, 74, 64, 46],
    isStudent: true,
    bornDate: new Date("2004-05-16"),
    sayHello: () => console.log("hello everyone")
}

students = [student_1, student_2, student_3]
students.filter(s => {
    if (getAvgs(s.marks) > 60) {
        return s.marks
    }
}
)

students.filter(s => {
    if (getAvgs(s.marks) > 60) {
        return s.marks
    }
}
).map(n => n.name)
/**
 * 1. Create multiple objects of type item, which has the following properties:

   - itemName(string)

   - itemPrice(number)

   - orderCount(number)

 */

let item1 = {
    itemName: "biryani",
    itemPrice: 480,
    orderCount: 120
}
let item2 = {
    itemName: "chicken masala",
    itemPrice: 1110,
    orderCount: 89
}
let item3 = {
    itemName: "tandoori",
    itemPrice: 1200,
    orderCount: 35
}
let item4 = {
    itemName: "cheesy pasta",
    itemPrice: 600,
    orderCount: 16
}

let items = [item1, item2, item3, item4]

/**
 *   - Find the items whose price is greater than 1000.
 */

items.filter(p => p.itemPrice > 1000)
/**
 * - Find the item which has the most number of orders.
 */
// let orders = items.map(o => o.orderCount)

let maxOrder = items.map(s => s.orderCount).reduce((currMax, curr) => {
    if (currMax > curr) {
        return currMax
    } else {
        return curr
    }
})

items.find(item => item.orderCount == maxOrder)




/**
 * Sort the items in ascending order of its price.
 */
items.sort((a, b) => a.itemPrice - b.itemPrice)
/**
 * Transform the items array into a list of items which has only two attributes - itemName and itemPrice.
 */
items.map(i => {
    return {
        itemName: i.itemName,
        itemPrice: i.itemPrice
    }
})





/**
 * 
2. Create mulitple objects of type medicine, which has the following properties -

   - medName

   - medPurchaseDate

   - medExpiryDate
   1. Create multiple objects of type item, which has the following properties:

   - medPrice
 */

let med1 = {
    medName: "Paracitamol",
    medPurchaseDate: new Date("2023-2-15"),
    medExpiryDate: new Date("2024-1-1"),
    medPrice: 562
}
let med2 = {
    medName: "zincovit",
    medPurchaseDate: new Date("2023-1-10"),
    medExpiryDate: new Date("2021-2-24"),
    medPrice: 1255
}
let med3 = {
    medName: "ondem",
    medPurchaseDate: new Date("2022-12-12"),
    medExpiryDate: new Date("2024-12-5"),
    medPrice: 956
}
let med4 = {
    medName: "zintac",
    medPurchaseDate: new Date("2023-2-12"),
    medExpiryDate: new Date("2022-2-4"),
    medPrice: 1012
}

let meds = [med1, med2, med3, med4]

/**
 * Find the meds whose price is greater than 1000.
 */


meds.filter(p => p.medPrice > 1000)
/**
 * Find the medicine which was purchased latest.
 */

let latest = meds.map(i => i.medPurchaseDate.getTime()).reduce((latestPurch, curr) => {
    if (latestPurch > curr) {
        return latestPurch
    } else {
        return curr
    }
})

meds.find(item => item.medPurchaseDate.getTime() == latest)




/**
 * Sort the items in ascending order of its expiry date.
 */

meds.sort((a, b) => a.medExpiryDate.getTime() - b.medExpiryDate.getTime())



/**
 *  Filter the medicine which has crossed the expiry date.
 */




meds.filter(i => i.medExpiryDate.getTime() < new Date().getTime())




/**
 * Find the medicine which has the least price.
 */

let leastPrice = meds.map(i => i.medPrice).reduce((least, curr) => {
    if (least < curr) {
        return least
    } else {
        return curr
    }
})

meds.find(med => med.medPrice == leastPrice)

/**
 * 
 */

