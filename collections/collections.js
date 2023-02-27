let phone1 = {
    imeiNum: 1224,
    price: 120000,
    model: "samsung",
    quantityAvailable: 10
}

let phone2 = {
    imeiNum: 1224,
    price: 120000,
    model: "mi",
    quantityAvailable: 10
}

let phone3 = {
    imeiNum: 1224,
    price: 120000,
    model: "oneplus",
    quantityAvailable: 10
}
let report = new Map()
report.set("s1", {
    name: "mehrab",
    age: 22,
    marks: [45, 67, 89]
})
report.set("s2", {
    name: "zia",
    age: 23,
    marks: [55, 42, 59]
})

const grade = (marks) => {
    let avgM = marks.reduce((value, curr) => value + curr) / marks.length
    if (avgM > 90 && avgM <= 100) {
        return "A"
    }
    else if (avgM > 60 && avgM <= 90) {
        return "B"
    }
    else if (avgM > 40 && avgM <= 60) {
        return "C"
    } else {
        return "D"
    }
}
for ([key, value] of report) {
    console.log(` ${key} get grade ${grade(value.marks)}`)
}

/**
 *  Assignment 5.2

Create a set of mobile phone objects which has the following properties.

  a. imeiNum

  b. model

  c. price

  d. quantityAvailable

Now add create a function named buyMobiles that takes two parameters - 
 set and orderDetail. OrderDetail is an object that would consist of model name  and quantity ordered.
  If the quantity ordered is greater than quantityAvailable, show a message that the mobile phone has only
   'x' quantity and update the set by removing that phone from the set.
 */
let mobile1 = {
    imeiNum: 2,
    model: "Realme-c",
    price: 12000,
    quantityAvailable: 18
}
let mobile2 = {
    imeiNum: 3,
    model: "Redmi-7E",
    price: 12000,
    quantityAvailable: 15
}
let mobile3 = {
    imeiNum: 4,
    model: "oneplus",
    price: 12000,
    quantityAvailable: 10
}
let mobilePhone = new Set()
mobilePhone.add(mobile1)
mobilePhone.add(mobile2)
mobilePhone.add(mobile3)

let orderDetails1 = {
    modelName: "oneplus",
    quantityOder: 12
}
let orderDetails2 = {
    modelName: "Redmi-7E",
    quantityOder: 18
}

const buyMobiles = (phoneSet, orderDetail) => {
    for (mobPhn of phoneSet) {
        if (orderDetail.modelName == mobPhn.model) {
            if (orderDetail.quantityOder < mobPhn.quantityAvailable) {
                mobPhn.quantityAvailable -= orderDetail.quantityOder;
            } else {
                console.log(`sorry this phone is out of stock , this mobile has only ${mobPhn.quantityAvailable} left`)
                mobilePhone.delete(mobPhn)
            }
        }
    }
    return mobilePhone
}

buyMobiles(mobilePhone, orderDetails2)

/**
 * 
Create a set of 5 articles which has the following properties.

a. articleId(number)

b. publishedDate(Date)

c. content(string)

d. author(string)
 */

let article1 = {
    articleId: 123123,
    publishedDate: new Date("2023-1-15"),
    content: "the road to hell is paved with works-in-progress",
    author: "Philip Roth"
}

let article2 = {
    articleId: 23256,
    publishedDate: new Date("2022-3-15"),
    content: "If you want to be help full start with yourself",
    author: "Roger dowlf"
}

let article3 = {
    articleId: 423123,
    publishedDate: new Date("2022-3-15"),
    content: "If you change the world be the change",
    author: "Roman Ralf"
}

let article4 = {
    articleId: 5251423,
    publishedDate: new Date("2021-8-16"),
    content: "A group of intellectuals may change a foolish man but a group of foolish man definetly change a intelligent man",
    author: "Martin Luther"
}

let article5 = {
    articleId: 1235683,
    publishedDate: new Date("2023-2-5"),
    content: "Never let your enemy to stop thinking about you",
    author: "Martin Luther"
}

let articles = new Set()
articles.add(article1)
articles.add(article2)
articles.add(article3)
articles.add(article4)
articles.add(article5)



/**
 * i. Create a function `listArticlesPublished`
 *  that takes a date as a parameter and shows all the articles published on that date.
 */


const listArticlesPublished = date => {
    for (d of articles) {
        if (d.publishedDate.getTime() == new Date(date).getTime()) {
            console.log(d)
        }
    }
}

/**
 * ii. Create a function `findArticlesByAuthor`
 *  that takes an author as a parameter and shows all the articles published by that author.
 */

const findArticlesByAuthor = author => {
    for (a of articles) {
        if (a.author == author) {
            console.log(a)
        }
    }
}

/**
 * iii. Create a function `deleteArticles` that takes an author as a parameter and the article set as a parameter, 
 * deletes all the articles written by that author and returns the updated articles.
 */

const deleteArticles = (author, articleSet) => {
    for (a of articleSet) {
        if (a.author == author) {
            articles.delete(a)
        }
    }
    return articleSet
}

/**
 * iv. Create a function `deleteSensitiveArticles` that takes a sensitive word(string)
 *  as a parameter and the article set as a parameter,
 *  and deletes all the article that has that sensitive word.
 *    // if (words[i] == sensitive) {
            // articles.delete(a)
            // }
 */


// const deleteSensitiveArticles1 = sensitive => {
//     for (a of articles) {
//         let words = a.content.split(" ")
//         for (i = 0; i < words.length; i++) {
//             words.filter(a => a != sensitive).join("")
//         }
//         return articles

//     }
// }


const deleteSensitiveArticles = (sensitive, articleSet) => {
    for (a of articleSet) {
        let words = a.content.split(" ")
        console.log(words)
        let filtered = words.filter(a => a != sensitive).join(" ")
        a.content = filtered
    }
    return articleSet
}
/**
 * v. Transfrom the set of articles into map of articles where
 *  the key would the author name and value will be the array of articles written by the author.
 */

const transformArticle = articleSet => {
    let mapOfArticles = new Map();
    for (a of articleSet) {
        if (mapOfArticles.has(a.author)) {
            let arrayOfArticles = mapOfArticles.get(a.author)
            arrayOfArticles[arrayOfArticles.length] = a
            mapOfArticles.set(a.author, arrayOfArticles)
        } else {
            mapOfArticles.set(a.author, [a])
        }
    }
    return mapOfArticles
}

const articlesByAuthor = articleSet => {
    let mapOFArticles = new Map()
    for (a of articleSet) {
        if (mapOFArticles.has(a.author)) {
            mapOFArticles.set(a.author, mapOFArticles.get(a.author) + 1)
        } else {
            mapOFArticles.set(a.author, 1)
        }
    }
    return mapOFArticles
}

/**
 * 
##### Create an ecommerce application by creating following set and maps

 a. Create a map of 5 users, where email id is the
  key and value is the detail of the user. Example as below.
 */


function Users(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
}

const user1 = new Users("Virat", 32, "Delhi")

const user2 = new Users("Salman", 49, "Banglore")

const user3 = new Users("Rahul", 31, "Gangtok")

const user4 = new Users("Zyan", 30, "Delhi")

const user5 = new Users("Maheesha", 28, "Panaji")

let usersInfo = new Map()


usersInfo.set("virat@gmail.com", user1)

usersInfo.set("salman@gmail.com", user2)

usersInfo.set("rahul@gmail.com", user3)

usersInfo.set("zyan@gmail.com", user4)

usersInfo.set("maheesha@gmail.com", user5)

// usersInfo.set("virat@gmail.com", { name: "Virat", age: 32, city: "Delhi" })

// usersInfo.set("salman@gmail.com", { name: "Salman", age: 49, city: "Banglore" })

// usersInfo.set("rahul@gmail.com", { name: "Rahul", age: 31, city: "Ganktok" })

// usersInfo.set("zyan@gmail.com", { name: "Zyan", age: 30, city: "Delhi" })

// usersInfo.set("maheesha@gmail.com", { name: "Maheesha", age: 28, city: "Panaji" })



/**
 * 
 b. Create a set of products, each product has the following properties.

    i. productId(number)
    ii. brandName(string)
    iii. quantityAvailable(number)
    iv. price(number)
    v. popularity(number)
    vi. dateManufactured(Date)
 */


function Products(productId, brandName, quantityAvailable, price, popularity, dateManufactured) {
    this.productId = productId
    this.brandName = brandName
    this.quantityAvailable = quantityAvailable
    this.price = price
    this.popularity = popularity
    this.dateManufactured = dateManufactured
}

const product1 = new Products(0, "Puma", 12, 4000, 0, new Date("2021-2-15"))

const product2 = new Products(1, "Adidas", 14, 3000, 0, new Date("2020-2-15"))

const product3 = new Products(2, "Zara", 19, 600, 0, new Date("2022-8-15"))

const product4 = new Products(3, "Lee", 11, 9000, 0, new Date("2020-2-15"))

const product5 = new Products(4, "Lenovo", 17, 0, 3200, new Date("2021-2-15"))

let setOfProducts = new Set([product1, product2, product3, product4, product5])


// let product1 = {
//     productId: 0,
//     brandName: "Puma",
//     quantityAvailable: 12,
//     popularity: 0,
//     dateManufactured: new Date("2021-2-15")
// }
// let product2 = {
//     productId: 1,
//     brandName: "Adidas",
//     quantityAvailable: 14,
//     popularity: 0,
//     dateManufactured: new Date("2020-2-25")
// }
// let product3 = {
//     productId: 2,
//     brandName: "Zara",
//     quantityAvailable: 19,
//     popularity: 0,
//     dateManufactured: new Date("2022-8-15")
// }
// let product4 = {
//     productId: 3,
//     brandName: "Lee",
//     quantityAvailable: 11,
//     popularity: 0,
//     dateManufactured: new Date("2020-2-15")
// }
// let product5 = {
//     productId: 4,
//     brandName: "Lenovo",
//     quantityAvailable: 17,
//     popularity: 0,
//     dateManufactured: new Date("2021-2-15")
// }


/**
 * 
 c. Create an empty set of orders, where each order will be having the following properties.

    i. orderId(number)
    ii. dateOrdered(Date)
    iii. userEmail(string)
    iv. productsOrdered(Set of numbers): this will consist of all the product Ids.
 */
let productIds = [1, 3]
let setOfOrders = new Set()
function Orders(orderId, dateOfOrdered, userEmail, productsordered) {
    this.orderId = orderId
    this.dateOfOrdered = dateOfOrdered
    this.userEmail = userEmail
    this.productsOrdered = productsordered
}

/**
 *  a. Create a function `orderProduct` that takes the productId, user email,
 *  array of productIds, products set and the empty orderset and save all this 
 * in the OrderSet and increments the product's popularity that has been ordered by 1.
 */

// let orderProduct = (userEmail, productids, products, orders) => {
//     const ordersId = orders.size + 1
//     const productIdSet = new Set(productids)

//     orders.add({
//         orderId: ordersId,
//         dateOrdered: new Date(),
//         userEmail: userEmail,
//         productsOrdered: productIdSet

//     })
//     console.log(products)
//     for (p of products) {
//         if (productIdSet.has(p.productId)) {
//             console.log(`increasing populartity of ${p.productId}`)
//             p.popularity += 1
//         }
//     }
//     return products
// }

let orderProduct = (userEmail, productids, products, orders) => {
    const ordersId = orders.size + 1
    const productIdSet = new Set(productids)
    orders.add(new Orders(ordersId, new Date(), userEmail, productIdSet))


    console.log(products)
    for (p of products) {
        if (productIdSet.has(p.productId)) {
            console.log(`increasing populartity of ${p.productId}`)
            p.popularity += 1
        }
    }
    return products
}

/**
 * Now write the following programs.
 */
/**
 *  b. Create a function `listAllProducts` that list all the products, order by manufacturing date
 */

const listAllProducts = (productSet) => {
    return Array.from(productSet).sort((a, b) => a.dateManufactured.getTime() - b.dateManufactured.getTime())
}



/**
 * c. Create a function, `listUsersByCity` that takes the city and
 *  users set as a parameter and list all the users in that city.
 */

const listUsersByCity4 = (city, users) => {
    return Array.from(users.Value()).filter(product => product.city == city)
}




/**
 * Create a function `listOrdersByUsers` that takes the orders set and products 
 * set as a parameter and returns a map of orders, 
 * where the key is the userId and value is the set of product brand name he has ordered.
 */

const listOrdersByUser6 = (orderSet, productSet) => {
    let mapOfOrder = new Map()
    let arrayOfProducts = Array.from(productSet)
    for (o of orderSet) {
        let arrayOfBrand = Array.from(o.productsOrdered).map(productId => {
            let productFind = arrayOfProducts.find(product => product.productId == productId)
            return productFind.brandName
        })
        console.log(arrayOfBrand)

        if (mapOfOrder.has(o.userEmail)) {
            let allBrandNames = Array.from(mapOfOrder.get(o.userEmail)).concat(arrayOfBrand)
            console.log(allBrandNames)
            mapOfOrder.set(o.userEmail, new Set(allBrandNames))
        } else {
            mapOfOrder.set(o.userEmail, new Set(arrayOfBrand))
        }
    }
    return mapOfOrder
}

/**
 *  e. Create a function `listOrdersOfProducts` that takes order set and products set as the parameter
 *  and returns a map of all the products, that has been ordered. 
 * The key of the returned map will be the brand name and the value will be
 *  the number of times the product has been ordered.
 */






const listOrdersOfProducts = (orderSet, productSet) => {
    let mapOfOrder = new Map()
    let arrayOfProducts = Array.from(productSet)
    for (o of orderSet) {
        let arrayOfBrand = Array.from(o.productsOrdered).map(productId => {
            let productFind = arrayOfProducts.find(product => product.productId == productId)
            return productFind.brandName
        })
        arrayOfBrand.forEach(p => {
            if (mapOfOrder.has(p)) {
                mapOfOrder.set(p, mapOfOrder.get(p) + 1)
            } else {
                mapOfOrder.set(p, 1)

            }
        })
    }
    return mapOfOrder

}
/**
 *  f. Create a function `sortProducts` that takes the product set and the field name as the parameter and 
 * returns an array of products that are sorted by the field name.
 *  For example if the function called - `sortProducts(products, "popularity")`,
 *  then the product set should be sorted by its popularity.
 */

const sortProduct1 = (productSet, fieldName) => {
    return Array.from(productSet).sort((a, b) => a[fieldName] - b[fieldName])

}




/**
 * Create a function `mostPopularProductUsers` that takes the products, orders, and users as the parameter
 *  and returns an array of all the users who have ordered the product that has the highest popularity.
 
 */

const mostPopularProductUsers3 = (productSet, orderSet, users) => {
    let productArr = Array.from(productSet)
    let maxPopularity = productArr.reduce((maxPop, currnt) => {
        if (maxPop > currnt.popularity) {
            return maxPop
        } else {
            return currnt.popularity
        }
    }, 0);
    let productIds = productArr.filter(p => p.popularity == maxPopularity).map(p => p.productId)

    let usersWithPopelarProduct = [];
    for (o of orderSet) {
        let hasProduct = false;
        for (orderedId of o.productsOrdered) {
            if (!hasProduct && productIds.includes(orderedId)) {
                hasProduct = true;
            }
        }
        if (hasProduct) {
            usersWithPopelarProduct.push(users.get(o.userEmail))
        }
    }
    return usersWithPopelarProduct
}




function Cars(brandName, modelName, yearOfManufacture) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.yearOfManufactur = yearOfManufactur;
}

const car1 = new Cars("Audi", "A101", 2019)
const car2 = new Cars("BMW", "L2", 2021)
const car3 = new Cars("TATA ", "S21", 2022)


const cars = [car1, car2, car3]

const listCarsEarlierThan = (cars, year) => {
    return cars.filter(c => c.yearOfManufacture < year)
}

const listCarsAge = (cars) => {
    cars.forEach(c => {
        console.log(`the ${c.brandName} car having model ${c.modelName} is ${new Date().getUTCFullYear() - c.yearOfManufacture} years old`)
    }
    )
}

Object.hasOwn(car1, 'brandName')

/**
 * calling method
 */
Cars.prototype.showMilage = function () {
    console.log("this car has very low mileage")
}

Cars.prototype.calFunc = function () {
    this.showMilage()
}

Cars.prototype.displayBrand = function () {
    console.log(`the brand is ${this.brandName}`)
}


/**
 * classes as backend in ES6
 */

class CarType {
    wheelCount = 4;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;

    }
    static wheels = 6;
    static convertToArray(set) {
        return Array.from(set)
    }
}

CarType.wheels
//6
CarType.wheelCount
//undefined
let car_1 = new CarType("TATA", "Breeza", 2009)
car_1.wheelCount
//4
car_1.wheels
// undefined
car_1.brand
//TATA

