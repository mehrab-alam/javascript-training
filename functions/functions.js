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

fruits = ["mango", "apple", "melon", "guava"]

/**
 * array.every
 * 
 * The every method calls the predicate function for each element 
 * in the array until the predicate returns a value which is coercible to
 *  the Boolean value false, or until the end of the array.
 */
fruits.every(x => x.length > 5)

/**
 * findLast
 */

fruits.findLast(x => x)
/**
 * fruits.includes
 */
fruits.includes("apple")

/**
 * fruits.reverse
 */

fruits.reverse()
/**
 * splice
 */

fruits.splice(0, 1, "kiwi")
/**
 * concat - add string or number  at last
 */
fruits.concat()

//findLastIndex
fruits.findLastIndex()

//indexOf
fruits.indexOf("banana")
//pop = remove and return last index of array
fruits.pop()
//fill = change the array with the inserting array

fruits.fill("kiwi", 0, 2)

/**
 * shift = Removes the first element from an array and returns it. If the array is empty
, undefined is returned and the array is not modified.

 */

fruits.shift("mango")
/**
 * unshift = nserts new elements at the start of an array,
 *  and returns the new length of the array.
 */
fruits.unshift()

/**
 * Returns a date converted to a string using the current locale.
 */
fruits.toLocaleString()
/**
 * construct = Constructs the target with the elements of specified array as the
 *  arguments and the specified constructor as the new.target value.
 */

fruits.construct()
/**
 * flat = returns a new array with all sub-array elements 
 * concatenated into it recursively up to the specified depth.
 */

fruits.flat()

/**
 * join = join all the elements of array
 */

fruits.join("")
/**
 * push = Appends new elements to the end of an array, and returns the new length of the array.
 */

fruits.push()
/**
 * slice = the index to the beginning of the specified portion of stringObj.
Returns a section of a string.
 */

fruits.slice()
/**
 * toString = change the array to string
 */
fruits.toString()
/**
 * flatmap = the flatMap method calls the callback function one time for each element in the array.
 */
fruits.flatMap(x => x)
/**
 * keys = Returns the names of the enumerable string properties and methods of an object.
 */
fruits.keys()

/**
 * reduce = A function that accepts up to four arguments.
 *  The reduce method calls the callbackfn function one time for each element in the array.
 */
fruits.reduce()
/**
 * some = The some method calls the predicate 
 * function for each element in the array until the predicate returns a value
 *  which is coercible to the Boolean value true, or until the end of the array.
 */
fruits.some(x => x.length > 4)
/**
 * emteries =
 */
fruits.entries()


fruits.findIndex(x => x)

fruits.lastIndexOf()

fruits.sort((a, b) => a - b)

fruits.values()