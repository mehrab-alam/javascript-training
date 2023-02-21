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
fruits.findLastIndex()
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

fruits.construct(fruits, fruits)
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

fruits.slice(0)

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