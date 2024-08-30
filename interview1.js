// console.log(a); // undefined
// console.log(b); //b is not defined : reference error
// var a=b=5

// let a=2
// let a=6  //canot redeclair block-scoped variable a
// console.log(a); //SyntaxError: Identifier 'a' has already been declared

// var a=9
// var a=8
// console.log(a); //8

// let arr=[[1,2],[3,4],[5,6]]
// console.log(arr.flat())

//without inbuild method

// function flatarr(arr,n){
//     let flatenarr=[];
//     if(n===0) return arr;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             flatenarr.push(arr[i][j])
//         }
//     } 
//     return flatenarr
// }
// console.log(flatarr(arr,1));

//let arr = [[1, 2], [3, 4], [5, 6]];
// let flattened = [];

// arr.forEach(subArray => {
//   subArray.forEach(element => {
//     flattened.push(element);
//   });
// });

// console.log(flattened);

// let arr = [[1, 2], [3, 4], [5, 6]];

// let flattened = arr.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flattened);

// console.log("3"+4*5); //320
// console.log("3"*4+5); //17

// console.log(typeof(NaN)); //number
// console.log(typeof NaN); //number

// console.log("5"-"3"+6); //8


//important
// let arr=["z","a","d","b","e"]
//sort without inbuild method

// let arr=["3","2","67","56","34"]
// for(j=0;j<arr.length;j++){
// for(let i=j;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//     }
// }}
// console.log(arr);

//shallow copy vrs deep copy

// Shallow Copy: Creates a new object or array but does not copy nested objects/arrays. Changes to nested objects/arrays in the copy will affect the original.because they are refering the same reference

// Object.assign():
// let original = { a: 1, b: { c: 2 } };
// let copy = Object.assign({}, original);

// Spread Operator:
// let original = { a: 1, b: { c: 2 } };
// let copy = { ...original };

// Array Slice():
// let originalArray = [1, 2, 3];
// let copyArray = originalArray.slice();

// Array Spread Operator:
// let originalArray = [1, 2, 3];
// let copyArray = [...originalArray];

// Deep Copy: Creates a new object or array and recursively copies all nested objects/arrays. Changes to nested objects/arrays in the copy do not affect the original.

// let original = { a: 1, b: { c: 2 } };
// let copy = JSON.parse(JSON.stringify(original));

//difference between setTimeout() and setInterval()


// Set an interval to log a message every second
// let intervalId = setInterval(() => {
//   console.log("This will log every second");
// }, 1000);

// Stop the interval after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval cleared!");
// }, 5000);

//use this way also
// let counter = 0;
// let intervalId = setInterval(() => {
//   console.log("Counter:", counter);
//   counter++;

// // Stop the interval when counter reaches 5
//   if (counter >= 5) {
//     clearInterval(intervalId);
//     console.log("Interval cleared!");
//   }},1000)

// console.log(Nan==NaN) //ReferenceError: Nan is not defined
// console.log(Nan===NaN) //ReferenceError: Nan is not defined
// console.log([]=={}) //false
// console.log({}=={}) //false

//find the longest element of an array
// let str="soumya ranjan behera is a very glorious man"
// let newstr=str.split(" ")
// let start=newstr[0].length

// function longele(){
//     for(let char of newstr){
//         if(char.length>start){
//             start=char
//         }
//     }
//     console.log(start);
// }
// longele()

//  Diff between angular and react
//  framework vrs library
//  uses real dom vrs virtual dom
//  developed by google vrs facebook
//  two way data binding vrs onedirectional data flow(one way data binding)
//  uses typescript vrs jsx

//  functional component are stateless in nature

//fragments in react:
// Sometimes wrapping elements in a div or another HTML element can lead to unnecessary DOM nodes, which might affect the layout, styling, or performance. Fragments allow you to avoid this by grouping elements without adding extra nodes.


//Temporary dead zone in javascript
// Scope and Hoisting:
// Variables declared with var are hoisted to the top of their scope and initialized with undefined, so they can be accessed before the actual declaration without causing an error (though they will be undefined).
// Variables declared with let and const are also hoisted, but they are not initialized until the execution reaches the line of code where they are declared. This creates the TDZ.
// eg 
// console.log(x); // ReferenceError: Cannot access 'x' before initialization //tdz
// let x = 10;
// console.log(x); // 10

//lifecyle method in react is used in classbased component where we are using useeffect hook in function based components.useeffect basically handel the side effect.

//Differenece between context-api and redux
//redux is used in big project whilw contextapi is used in samll to medium project

//custom hooks
//diiference between usecallback and usememo hooks
//html vrs xhtml
//em tag vrs i tag


