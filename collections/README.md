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
const numSet = new Set()
numSet.add(29)
numSet.add(45)

//Remove elements
numSet.delete(45)

//Get the size
numSet.size

// Iterate over the set
for(item of numSet){
  console.log(numSet)
}

//Build set from array
const arrSet = new Set([2,5,6,3,2,6])

```

#### Assignment 5.2

Create a set of mobile phone objects which has the following properties.

  a. imeiNum

  b. model

  c. price

  d. quantityAvailable

Now add create a function named buyMobiles that takes two parameters - phones set and orderDetail. OrderDetail is an object that would consist of model name  and quantity ordered. If the quantity ordered is greater than quantityAvailable, show a message that the mobile phone has only 'x' quantity and update the set by removing that phone from the set.
