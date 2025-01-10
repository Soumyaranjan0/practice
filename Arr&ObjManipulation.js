// Use `sort` to sort an array of objects first by age, then by name if ages are equal.
// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 25 },
//     { name: "Dave", age: 30 }
// ];
// const sortedPeople = people.sort((a, b) => {
//     if (a.age === b.age) {
//         return a.name.localeCompare(b.name);
//     }
//     return a.age - b.age;
// });
// console.log(sortedPeople);
// Output: [{ name: "Bob", age: 25 }, { name: "Charlie", age: 25 }, { name: "Alice", age: 30 }, { name: "Dave", age: 30 }]


// Use `reduce` and recursion to deeply flatten a nested array.
// const nestedArray = [1, [2, [3, [4]], 5]];
// const deepFlatten = (arr) => 
//     arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
// console.log(deepFlatten(nestedArray)); // Output: [1, 2, 3, 4, 5]


// Use `reduce` to group an array of objects by a specific property.
// const data = [
//     { category: "fruit", name: "apple" },
//     { category: "vegetable", name: "carrot" },
//     { category: "fruit", name: "banana" },
//     { category: "vegetable", name: "lettuce" }
// ];
// const groupedByCategory = data.reduce((acc, item) => {
//     if (!acc[item.category]) {
//         acc[item.category] = [];
//     }
//     acc[item.category].push(item.name);
//     return acc;
// }, {});
// console.log(groupedByCategory);
// Output: { fruit: ["apple", "banana"], vegetable: ["carrot", "lettuce"] }
