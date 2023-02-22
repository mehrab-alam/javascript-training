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

