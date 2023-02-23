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

const findArticlesByAuthor1 = author => {
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
 */


const deleteSensitiveArticles = sensitive => {
    for (a of articles) {
        let words = a.content.split(" ")
        for (i = 0; i < words.length; i++) {
            if (words[i] == sensitive) {
                articles.delete(a)
            }
        }
    }

}

/**
 * v. Transfrom the set of articles into map of articles where
 *  the key would the author name and value will be the array of articles written by the author.
 */

articles = new Map()
articles.set("Philip Roth", article1)
articles.set("Roger dowlf", article2)
articles.set("Roman Ralf", article3)
articles.set("Martin Luther", article4)
articles.set("Martin Luther", article5)
