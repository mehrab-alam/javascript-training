### Keyed Collections

We have already seen a collection - Array, whose index starts with 0. In this module we are going to learn about other types of collections - Map and Set.

#### Map Collection

A Map object is a simple key/value map and can iterate its elements in insertion order.

Let's see how we can create a map.

```js
const report = new Map();
report.set("student1", {
  name: "Shad",
  age: 12,
  marks: [56, 75, 78, 50],
});

report.set("student2", {
  name: "Vijay",
  age: 13,
  marks: [56, 70, 77, 50],
});
```

As you can see we have two objects that have the keys - student1 and student2 respectively for the storing the values. Now lets iterate the key and values stored in the map.

```js
for ([key, value] of report) {
  console.log(`${key} is ${value.name}`);
}
```

Let's look at few other methods defined on the map collection.

1. Retrieve the size of the map collection

```js
> report.size
2
```

2. Retrieve the value stored in map, using the key

```js
report.get("student1");
```

3. List all the keys and values stored in the map collection

```js
> report.keys()
[Map Iterator] { 'student1', 'student2' }

> report.values()
[Map Iterator] {
  { name: 'Shad', age: 12, marks: [ 56, 75, 78, 50 ] },
  { name: 'Vijay', age: 13, marks: [ 56, 70, 77, 50 ] }
}
```

4. Check if the key is present in the map

```js
> report.has('student2')
true
> report.has('student3')
false
```

There are lot of similarity between object and maps as both of them use strings as the key and can be accessed using the field name.

However there are other scenarios where Map should be preferred over object.

- Use Map, when all the value and keys type are same.
- Use Map, when there is need to use any primitive data type as the key.
- Use Map, when insertion order matters while retrieving the values.

#### Set object

Set objects are collections of unique values. You can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection.

The following code shows some basic operations with a Set

```js
const numSet = new Set();
numSet.add(29);
numSet.add(45);

//Remove elements
numSet.delete(45);

//Get the size
numSet.size;

// Iterate over the set
for (item of numSet) {
  console.log(numSet);
}

//Build set from array
const arrSet = new Set([2, 5, 6, 3, 2, 6]);
```

#### Assignment 5.1
##### Buy Mobile from a showroom

Create a set of mobile phone objects which has the following properties.

a. imeiNum

b. model

c. price

d. quantityAvailable

Now add create a function named buyMobiles that takes two parameters - phones set and orderDetail. OrderDetail is an object that would consist of model name and quantity ordered. If the quantity ordered is greater than quantityAvailable, show a message that the mobile phone has only 'x' quantity and update the set by removing that phone from the set.

##### Manage articles for the authors

Create a set of 5 articles which has the following properties.

a. articleId(number)

b. publishedDate(Date)

c. content(string)

d. author(string)

i. Create a function `listArticlesPublished` that takes a date as a parameter and shows all the articles published on that date.

ii. Create a function `findArticlesByAuthor` that takes an author as a parameter and shows all the articles published by that author.

iii. Create a function `deleteArticles` that takes an author as a parameter and the article set as a parameter, deletes all the articles written by that author and returns the updated articles.

iv. Create a function `deleteSensitiveArticles` that takes a sensitive word(string) as a parameter and the article set as a parameter, and deletes all the article that has that sensitive word.

v. Create a function `convertToMap` that takes the set of articles as parameter and transforms the set of articles into map of articles where the key would the author name and value will be the array of articles written by the author.


##### Create an ecommerce application by creating following set and maps

 a. Create a map of 5 users, where email id is the key and value is the detail of the user. Example as below.
   ```js
    "don@mail.com" -> { name: "Ram", age: 32, city: "Delhi"}
   ```

 b. Create a set of products, each product has the following properties.

    i. productId(number)
    ii. brandName(string)
    iii. quantityAvailable(number)
    iv. price(number)
    v. popularity(number)
    vi. dateManufactured(Date)

 c. Create an empty set of orders, where each order will be having the following properties.

    i. orderId(number)
    ii. dateOrdered(Date)
    iii. userEmail(string)
    iv. productsOrdered(Set of numbers): this will consist of all the product Ids.

 Now write the following programs.

 a. Create a function `orderProduct` that takes the productId, user email, array of productIds, products set and the empty orderset and save all this in the OrderSet and increments the product's popularity that has been ordered by 1.

 b. Create a function `listAllProducts` that list all the products, order by manufacturing date

 c. Create a function, `listUsersByCity` that takes the city and users list as a parameter and list all the users.
