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

// without inbuild method

// function flatarr(arr,n){
//     let flatenarr=[];
//     if(n===0) return arr;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             flatenarr.push(arr[i][j])
//         }
//     }
//     return flatenarr;
// }
// console.log(flatarr(arr,1));

// let arr = [[1, 2], [3, 4], [5, 6]];
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

// console.log("5"-"3"+6); //8

// important
// let arr=["z","a","d","b","e"]
// sort without inbuild method

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

// Stop the interval when counter reaches 5
//   if (counter >= 5) {
//     clearInterval(intervalId);
//     console.log("Interval cleared!");
//   }

// console.log(Nan==NaN) //ReferenceError: Nan is not defined
// console.log(Nan===NaN) //ReferenceError: Nan is not defined
// console.log([]=={}) //false
// console.log({}=={}) //false
// console.log(null || "" || false) //false(if all the value is falsy then it will take the last value)
// console.log([] || 0 || true) //[](if any value is truthy then it will take the first value)

//JSON.parse() use cases :Parse JSON to a javascript value
//to turn a JSON string into an object.
// const jsonString = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonString);
// console.log(obj.name); // Output: John

//Parsing Arrays from JSON Strings
// const jsonArray = '["apple", "banana", "cherry"]';
// const arr = JSON.parse(jsonArray);
// console.log(arr[1]); // Output: banana

//Handling Nested JSON
// const nestedJson = '{"user": {"name": "Alice", "age": 25}, "hobbies": ["reading", "traveling"]}';
// const obj = JSON.parse(nestedJson);
// console.log(obj.user.name); // Output: Alice
// console.log(obj.hobbies[0]); // Output: reading

//Using JSON.parse() with Dynamic Data
// const apiResponse = '{"status": "success", "data": {"id": 1, "message": "Hello!"}}';
// const result = JSON.parse(apiResponse);
// console.log(result.data.message); // Output: Hello!

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
//redux is used in big project while contextapi is used in small to medium project

//custom hooks
//diiference between usecallback and usememo hooks
// When to Use:
// useCallback: When you need to memoize a function and want to avoid unnecessary re-creation of that function on each render (often for performance reasons when passing functions as props).
// useMemo: When you need to memoize the result of an expensive calculation to avoid recomputing it unless necessary.
// In short:
// useCallback is for functions.
// useMemo is for values or results of functions (including objects, arrays, etc.).

//html vrs xhtml

// HTML and XHTML are both markup languages used to structure and present content on the web, but they differ in several ways, particularly in their syntax and adherence to standards. Below are the key differences between the two:

// 1. Definition
// HTML (HyperText Markup Language): A standard markup language used for creating web pages. It's flexible with rules and doesn't strictly enforce syntax requirements.
// XHTML (eXtensible HyperText Markup Language): A stricter and more structured version of HTML, based on XML (eXtensible Markup Language). It is designed to enforce cleaner and more consistent code.
// 2. Syntax Rules
// HTML: More lenient with syntax errors. Browsers can usually interpret and display HTML code even if there are some mistakes or inconsistencies.
// E.g., Tag names are case-insensitive (<div> or <DIV>).
// Self-closing tags (like <br>, <img>) do not need a closing slash.
// XHTML: Stricter syntax that adheres to XML rules.
// Tag names are case-sensitive (must be lowercase, e.g., <div>).
// All tags must be properly closed, including self-closing tags, which require a trailing slash (e.g., <br />, <img />).
// All attribute values must be quoted (e.g., <input type="text" />).
// All elements must be properly nested.
// 3. Error Handling
// HTML: Tolerant of mistakes. Browsers are forgiving and will try to render the content even with malformed HTML.
// XHTML: Less forgiving. Browsers will not render the page if there is an XML parsing error, making it essential that XHTML documents are well-formed.

//em tag vrs i tag
// Use <em> when you want to emphasize a word or phrase to add meaning or stress.
// Use <i> when you need to italicize text for stylistic purposes

// var a =12;
// console.log(a*12)
// console.log(a**12) //12^12

// "use strict"
// function test(){
//     salary=12000;
//     console.log(salary);
// }
// test()  //12000 //it is a wrong practice so you can write use scrict

// function test(){
//     console.log(test.abc);
// }
// test() //undefined
// test.abc=400;
// test.abc=600;
// test() //600

// console.log({}=={}); //false
// console.log({}==={}); //false

// let a={
//     name : "soumya",
// }
// let b={
//     ...a/
// }
// b.name="dibya"
// console.log(a.name);

// let a =10;
// let b = new Number(10)
// let c =10;
// console.log(a===b); //false
// console.log(b===c); //false

// function test(record){
//     if(record=={age:28}){
//         console.log('you are an adult');
//     }else if(record==={age : 28}){
//         console.log('you are still adult');
//     }else{
//         console.log('no record');
//     }
// }
// test({ age : 28}) //no record //because of different memory location

// console.log(+true); //1
// console.log(!'soumya'); //false

// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };
// a[b]=600;
// b[c]=700;
// console.log(a[c]); //600
// console.log(a[b]); //600
// console.log(b[b]); //700
// console.log(b[c]); //700

//method to convert a number to string is
//JSON.stringify()
//String(number)
//number.toString()
//number+""
//`${numnber}`

// let str="abcdef"
// let str1=123;
// a1b2c3def
// let str="abc"
// let str1=123456;
// let str2=String(str1)
// //a1b2c3456
// function join(str,str2){
//     let newstr=[]
//     for(let i=0;i<Math.max(str.length,str2.length);i++){
//         newstr.push(str[i],str2[i])
//     }
//     console.log(newstr.join(""));
// }
// join(str,str2)

// or

// let str = "abcdef";
// let str1 = "123";
// let result = '';
// for (let i = 0; i < Math.max(str.length, str1.length); i++) {
//Ensures the loop runs as long as the longest of the two strings.
//     if (i < str.length) {
//         result += str[i];
//     }
//     if (i < str1.length) {
//         result += str1[i];
//     }
// }
// console.log(result); // Output: "a1b2c3def"

// function fun1(){
//     return 2
// }
// function fun2(){
//     return 4
// }
// let a =(fun1(),fun2())
// console.log(a); //4

// let arr = ["one", "two", "three"];
// let str = "hello";
// const a = arr.includes("on");
// const b = arr.includes("onetwo");
// const c= str.includes('ll')
// console.log(a,b,c) //false false true

// console.log(true==""); //false
// console.log("1"==1); //true

// let a ={name:'Adarsha'}
// let z={...a}
// z.name="Adil"
// console.log(a.name); //'Adarsha

// console.log(+true); //1
// console.log(!"xyz"); //false

// Example of currying
// function curry(a){
//     return function (b){
//         return function (c){
//             return a*b*c
//         }
//     }
// }
// console.log(curry(7)(6)(2));

// let data=["anil","soumya","dibya","ranjan"]
// delete data[1]
// console.log(data); //[ 'anil', <1 empty item>, 'dibya', 'ranjan' ]
// console.log(data.length); //4 it will not affect the data length

// const obj={name:"soumya"}
// Object.seal(obj)
// obj.name="dibya"
// obj.age=28//you cant add new property but you can change the existing property value through seal method.
// console.log(obj)

// const str1="hello"
// const str2="world1234"

// function mergeTwostr(str1,str2){
//     let  str3=[]
//   for(let i=0;i<Math.max(str1.length,str2.length);i++){
//     str3.push(str1[i],str2[i])
//   }
//   return str3.join("");
// }
// console.log(mergeTwostr(str1,str2));

//write function for both the case it will return same value
// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,4) //6
// sum((2),(4)) 6

//diff between axois and fetch?
// Axios is more feature-rich, easier to use, and generally preferred when building larger applications that need things like interceptors, automatic error handling, and request cancellation.Automatically parses JSON responses.
// Fetch is a native browser API, lightweight, and great for simple use cases, but it requires more manual work and lacks some advanced features.

//difference between strong and bold tag?
//emphasize the word and it is using for bold the element for styling purpose.

//diff. between metertag and progress tag in html?
// progress battery bar meter-colour progress and progress-grey progress.

//use of required attribute in html?
//basically,you cant be empty that field.

//what is data list?
//It enhances form usability by providing autocomplete suggestions, while still allowing users to enter their own custom input.
//<datalist id="city-list">
{
  /* <option value="New York">
<option value="Los Angeles">
<option value="Chicago">
<option value="Houston">
<option value="Miami">
</datalist> */
}

//which property we are use for image refelection?
// The box-reflect property is currently only supported in WebKit-based browsers (e.g., Chrome, Safari). It is not supported in Firefox or Edge.
// Always use the -webkit- prefix for compatibility.

//what is empty tag?
// which not closing tag like br ,hr etc

// how can we add gradient in css?
// background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

//diff flexbox in grid?
//flex box is 1d and grid is 2d
//align item in one axis and align item in both the axis
//simpler syntax and complex syntax
//support by all the browser and it cantnot

//what is css overflow?
// overflow:
// visible: Content is visible outside the container, no scrollbars.
// hidden: Overflowing content is clipped, no scrollbars.
// scroll: Always shows scrollbars.
// auto: Shows scrollbars only when necessary.

// property for image reflection?
// Using the ::after pseudo-element to mirror and position the reflection.
// Applying linear-gradient and opacity to achieve a fade-out effect.
// Using transform: scaleY(-1) to flip the reflection vertically.

//attribute selectors?
// input[type="text"] {
//     border: 1px solid #000;
// }

//pseudo element in css?
// ::before: Adds content before an element’s content.
// ::after: Adds content after an element’s content.
// ::first-line: Styles the first line of a block-level element.
// ::first-letter: Styles the first letter of a block-level element.
// ::selection: Styles the portion of an element that is selected by the user.
// Pseudo-elements provide a powerful way to enhance the presentation of content without altering the HTML structure.

// function abc(){
//     console.log(abc.timeout)
// }
// abc() //undefined
// abc.timeout=200;
// abc.timeout=100;
// abc() //100

// console.log(isNaN("hello"))    // true
// console.log(isNaN(123));       // false
// console.log(isNaN('123'));     // false
// console.log(isNaN('abc'));     // true
// console.log(isNaN(NaN));       // true
// console.log(isNaN(undefined)); // true
// For a stricter check, you can use Number.isNaN, which does not coerce the value.
// console.log(Number.isNaN('abc')); // false
// console.log(Number.isNaN(NaN));   // true

// console.log(2-"2"); //0
// console.log("2"-2); //0
// console.log(2+'2') //22
// console.log(2+ +'2') //4

// console.log(typeof(NaN)) //number
// console.log(NaN===NaN) //false //because of different memory location

//which situation i will receive NaN as output?
//console.log(0 / 0);          // NaN (undefined division)
// console.log(Math.sqrt(-1));  // NaN (square root of a negative number)
// console.log(Infinity - Infinity); // NaN (undefined subtraction)
// console.log(parseInt('abc'));  // NaN
// console.log(parseFloat('xyz')); // NaN
// let result = NaN + 5;
// console.log(result); // NaN
// result = NaN * 2;
// console.log(result); // NaN
// console.log(Math.log(-1));      // NaN (logarithm of a negative number)
// console.log(Math.acos(2));      // NaN (arc cosine out of range)
// console.log(Math.pow(-1, 0.5)); // NaN (fractional power of a negative number)
// console.log('abc' * 3); // NaN
// console.log("abc"+3); //abc3 //in case of + only it will concat
// console.log(Number(true)) // 1
// console.log(Number("hello")) // NaN

// console.log(a); //undefined
// console.log(b); //ReferenceError: b is not defined
// var a=b=6

// console.log([]==[]) //false
// console.log([]===[]) //false

// let a = [];
// let b = [];
// let c = a;

// console.log(a == b); // false: different memory references
// console.log(a === b); // false: different references

// console.log(a == c); // true: same reference
// console.log(a === c); // true: same reference

//immediate invoke function
// (function imf(){
// console.log("immediate invoke function")
// })()

// function v(){
//     var a = 10;
//     let b=10
// }
// console.log(a) //reference error
// console.log(b) //reference error

// const z=[{
//     name:"soumya",
//     gender:"M",
//     age:67},{
//     name:"dibya",
//     gender:"F",
//     age:67},{
//     name:"ranjan",
//     gender:"M",
//     age:67}
// ]
// z.map((ele)=>{
//     if(ele.gender=="F"){
//         console.log(ele)
//     }
// })

//First class function?
//Assigned to variables.
// let fun1=()=>{
//     console.log("func1");
// }
// fun1()
//Passed as arguments to other functions.
// let fun1 = (func2) => {
//   return func2();
// };
// function func2() {
//     console.log("func2");
// }
// fun1(func2)
//Returned from other functions.
// function createGreeting() {
//     return function() {
//       console.log('Hello from the returned function!');
//     };
//   }
//   const greet = createGreeting();
//   greet();  // Output: Hello from the returned function!

// console.log("abc"/2) //NaN
// console.log(NaN==NaN); //false
// console.log(NaN===NaN); //false

// let a = "a" * 2;
// let b = "string" / 2;
// console.log(a==b) //false

// console.log(1=="1"); //true

// function curr(a){
//     return function (b){
//         let res=a*b
//         return function (c){
//             return res*c
//         }
//     }
// }
// console.log(curr(2)(3)(4));

// coverting object into array

// 1. Convert Object to Array of Keys:
// Use Object.keys() to get an array of the object's keys.
// const obj = { a: 1, b: 2, c: 3 };
// const keysArray = Object.keys(obj);
// console.log(keysArray);  // Output: ['a', 'b', 'c']

// 2. Convert Object to Array of Values:
// Use Object.values() to get an array of the object's values.
// const obj = { a: 1, b: 2, c: 3 };
// const valuesArray = Object.values(obj);
// console.log(valuesArray);  // Output: [1, 2, 3]

// 3. Convert Object to Array of Key-Value Pairs:
// Use Object.entries() to get an array of key-value pairs (arrays of 2 elements, with key and value).
// const obj = { a: 1, b: 2, c: 3 };
// const entriesArray = Object.entries(obj);
// console.log(entriesArray);  // Output: [['a', 1], ['b', 2], ['c', 3]]

// 4. Custom Conversion (Flatten or Modify Object Structure):
// You can also manually iterate over the object and build a custom array format.
// const obj = { a: 1, b: 2, c: 3 };
// const customArray = [];
// for (let key in obj) {
//     customArray.push([key, obj[key]]);
// }
// console.log(customArray);  // Output: [['a', 1], ['b', 2], ['c', 3]]

// Specificity Calculation:
// Specificity is usually calculated using four values (A, B, C, D) where:
// A (inline styles): Points from inline styles (added directly in the element’s style attribute).
// B (ID selectors): Points from #id selectors.
// C (class, attribute, and pseudo-class selectors): Points from .class, [attribute], and :pseudo-class selectors.
// D (element and pseudo-element selectors): Points from element and ::pseudo-element selectors.

// function fn (){
//     console.log("soumya")
// }
// console.log(fn.name); //fn

// console.log(abc); //reference error: abc is not defined
// abc="soumya"

// const arr=[200,100,330,70]
// arr.sort()
// console.log(arr) // [ 100, 200, 330, 70 ]
// console.log((a,b)=>a-b); // [ 70, 100, 200, 330 ]

// function abc(xyz){
// console.log(~~xyz);
// }
// abc(1.87) //1

// console.log([]==[]); //false
// console.log([]=="") //true //because of type coercion . JavaScript will try to convert one or both values to a common type i.e string.
// console.log(""==""); //true

// function abc(a,b,c=0){
// }
// console.log(abc.length); //2 because of two parameter and c is default
// function abc(a,b=0,c){
// }
// console.log(abc.length); //1 because before default b there is one parameter ,c also doesnot count because this is after b.

// let string="soumya"
// let reverse=""
// let length=string.length
// for(let i=length-1;i>=0;i--){
//     reverse+=string[i]
// }
// console.log(reverse);

//pure function: it will give the same value even how much time you are calling
//impure function //always return different output even you calling the same again
//also you can use Math.random() method
// let count=10;
// function impure(){
//      return count++;
// }
// console.log(impure(count));
// console.log(impure(count));

// let a = 10 * "hello";
// let b = 10 - "he";

// console.log(NaN == NaN); //False beacause of having different value

// const arr=[1,2,3,4,5]
// arr.splice(2,1) //length: 4 //can chages the original array
// delete arr[2]  //length:5
// console.log(arr.length);

//Difference between framework and library
// Control	You control when and how to call the library.	The framework controls the flow; you write code within its structure.
// Focus	Focused on solving specific tasks.	Provides a complete architecture for the application.
// Flexibility	More flexible, can be integrated with other tools.	Less flexible, follows strict guidelines and structure.
// Learning curve	Easier to learn, depending on the library's purpose.	Can be more complex, as you need to learn the framework’s entire ecosystem.
// Scope	Typically smaller and focused on specific functionalities.	Larger, more comprehensive solutions covering multiple aspects of development.
// In short:
// Library: You call it when needed.
// Framework: It calls your code and dictates the architecture of the application.

//add a space after string
// var name="ilovejavascript"
// var space=name+" "
// console.log(space.length);

//Lazyloading in react
//Lazy loading in React helps optimize performance by loading components only when they are needed.
// You use React.lazy() to dynamically import components and Suspense to show a fallback UI while loading.
// Lazy loading is especially beneficial for large apps and can also be applied to routes in React using React Router.

// Key Benefits:
// Faster initial loading time: Only essential data or resources are loaded initially.
// Efficient use of memory: Resources are loaded on demand, which reduces memory usage.
// Improved performance: Especially useful in large applications or websites with lots of content.

//lists in css
// Ordered List	<ol>	Use when the order matters.
// Unordered List	<ul>	Use when the order doesn’t matter.
// Description List	<dl>	Use for term-description pairs.
// Nested Lists	<ol>, <ul>	Use for hierarchical lists.

// const arr=[100,200,2,3,5]
// arr.sort() //[ 100, 2, 200, 3, 5 ] it will sort accoring to 1st position
// console.log(arr);

// function abc(a,b,...args){

// }
// console.log(abc.length); //2

//hasownproperty
// const obj = {
//   name: "Alice",
//   age: 25
// };

// console.log(obj.hasOwnProperty("name")); // true
// console.log(obj.hasOwnProperty("age"));  // true
// console.log(obj.hasOwnProperty("toString")); // false (inherited from Object.prototype)

//  let data={name:"soumya"}
//  console.log(delete data.name); //true
//  console.log(data); //false
// console.log(delete data); //false // the delete operator is used to remove a property from an object. It cannot delete variables or non-configurable properties like those declared with let, const, or var

// let data = [1, 2, 3, 4, 5, 6];
// console.log(delete data); //false
// console.log(delete data[1]); //true

//destructure an array
// let arr=[1,2,3,4,5,6]
// let [a,b,c,d,e,f]=arr
// console.log(a);

// let a = false || {} || null;
// console.log(a); //{} //pick first true value

//reverse a number
// let a=123
// let b=a.toString()
// console.log(b);
// let c=a.split("").reverse().join("")
// console.log(c);

// console.log('3'+12*5); //360
// console.log('3'+12+5); //3125
// console.log('3'+"12"+5); //3125

//mount unmount and update in react.js
//In function-based components in React, the lifecycle concepts of mounting, updating, and unmounting are handled using the useEffect hook. Since function components don't have class-based lifecycle methods like componentDidMount, componentDidUpdate, or componentWillUnmount, useEffect provides a way to manage side effects across these lifecycle stages.

// mounting
// import React, { useEffect } from 'react';

// function MyComponent() {
//   useEffect(() => {
//     console.log('Component mounted');
//     // Code that runs when the component is first rendered
//   }, []); // Empty dependency array means it runs only on mount

//   return <div>Hello, World!</div>;
// }
// The effect with an empty dependency array ([]) runs only once after the initial render, which simulates the mounting phase.

// unmount
// import React, { useEffect } from 'react';

// function MyComponent() {
//   useEffect(() => {
// Mounting logic
//     console.log('Component mounted');

// Cleanup function for unmounting
//     return () => {
//       console.log('Component unmounted');
// Cleanup code here (e.g., clearInterval, unsubscribe from events)
//     };
//   }, []); // Empty dependency array ensures this effect runs only once on mount/unmount

//   return <div>Goodbye, World!</div>;
// }
//The cleanup function runs before the component is unmounted. It's useful for cleaning up resources like subscriptions, timers, or event listeners.

//update
//import React, { useState, useEffect } from 'react';

// function MyComponent({ count }) {
//   useEffect(() => {
//     console.log('Component updated with count:', count);
//     // Runs whenever `count` prop changes
//   }, [count]); // Runs the effect when `count` changes

//   return <div>Count: {count}</div>;
// }
// The effect runs every time the count prop changes. If there are multiple dependencies, the effect will run whenever any of those dependencies change.

//useeffect parameter
// The useEffect hook in React is used to handle side effects in function components. It takes two parameters:
// Effect Callback Function: A function that contains the side effect logic you want to run.
// Dependency Array (optional): An array that specifies the values that the effect depends on. React will re-run the effect only if any of the values in this array change.
//syntax
// useEffect(() => {
// Your side effect logic here
//   return () => {
// Optional cleanup logic here
//   };
// }, [dependencies]);

//useReducer hook
// The useReducer hook in React is a powerful alternative to useState for managing complex state logic in function components. It is especially useful when you need to manage state that involves multiple sub-values or when the next state depends on the previous one.

// const arr=[1,2,3,4,5,66,7,8,9]
// const result=arr.map((ele)=>ele>4)
// console.log(result) //  [
//   false, false, false,
//   false, true,  true,
//   true,  true,  true
// ]

// 1. find() Method
// The find() method is used to search for a specific element in an array based on a condition (callback function). It returns the first element that satisfies the provided testing function. If no elements satisfy the condition, it returns undefined.
// const numbers = [1, 2, 3, 4, 5];
// const found = numbers.find(element => element > 3);
// console.log(found); // Output: 4
// find() returns the first number greater than 3, which is 4.

// 2. some() Method
// The some() method checks if at least one element in the array satisfies a given condition (callback function). It returns a boolean (true or false).
// const numbers = [1, 2, 3, 4, 5];
// const hasLargeNumber = numbers.some(element => element > 3);
// console.log(hasLargeNumber); // Output: true
// some() checks if there is any number greater than 3 in the array. Since there are such numbers, it returns true.

// 3. every() Method Overview:
// Returns true if every element in the array passes the test (i.e., if the callback function returns true for every element).
// Returns false if at least one element fails the test (i.e., the callback function returns false for at least one element).
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(element => element % 2 === 0);
// console.log(allEven); // Output: true

// const numbers = [2, 3, 6, 8];
// const allEven = numbers.every(element => element % 2 === 0);
// console.log(allEven); // Output: false
// In this case, not all elements in the array are even (since 3 is odd), so every() returns false.

// Common API error codes are typically defined using HTTP status codes, which indicate the outcome of an API request. These status codes are divided into categories based on the first digit:

// 1xx: Informational
// 2xx: Success
// 3xx: Redirection
// 4xx: Client Errors
// 5xx: Server Errors

// 2xx: Success Codes
// 200 OK: The request was successful, and the server returned the requested data.
// 201 Created: The request was successful, and a new resource was created (commonly used for POST requests).
// 204 No Content: The request was successful, but no content is returned (commonly used for DELETE operations).

// 4xx: Client Error Codes
// These codes indicate that there was a problem with the request, usually due to something the client (user) did wrong.

// 400 Bad Request: The server could not understand the request due to invalid syntax or missing parameters.

// Example: Missing required fields in a JSON body.
// 401 Unauthorized: The request requires user authentication, and the provided authentication credentials are either missing or invalid.

// Example: Invalid API token or missing Authorization header.
// 403 Forbidden: The server understood the request but refuses to authorize it. This often happens when the user doesn't have permission to perform an action.

// Example: Trying to access an admin-only endpoint as a regular user.
// 404 Not Found: The requested resource could not be found on the server.

// Example: Accessing a non-existent API endpoint or requesting data for a resource that doesn't exist.
// 405 Method Not Allowed: The HTTP method used in the request is not allowed for the specific resource.

// Example: Sending a POST request to an endpoint that only supports GET.
// 406 Not Acceptable: The server can’t generate a response that matches the client’s Accept headers.

// Example: The client requests a response in a format (like XML) that the API cannot return.
// 408 Request Timeout: The client took too long to send the request, and the server timed out waiting for it.

// 409 Conflict: The request could not be completed due to a conflict with the current state of the target resource.

// Example: Trying to create a resource that already exists (duplicate entry).
// 410 Gone: The requested resource is no longer available and will not be available again (often used when an API endpoint has been deprecated).

// 415 Unsupported Media Type: The server does not support the media format of the request.

// Example: Sending data in an unsupported format (e.g., sending XML when only JSON is accepted).
// 422 Unprocessable Entity: The server understands the request but can't process the data due to validation errors.

// Example: Invalid input format, like passing a string where a number is expected.
// 429 Too Many Requests: The user has sent too many requests in a given time period, triggering rate-limiting.

// Example: Making excessive API calls in a short time without respecting rate limits.
// 5xx: Server Error Codes
// These codes indicate a problem with the server while processing a valid request.

// 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.

// Example: A bug in the server code or unexpected conditions like database issues.
// 501 Not Implemented: The server does not support the functionality required to fulfill the request.

// Example: Requesting a feature that has not been implemented in the API.
// 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.

// Example: Issues with server-to-server communication (e.g., between a reverse proxy and the API server).
// 503 Service Unavailable: The server is currently unable to handle the request due to being overloaded or down for maintenance.

// 504 Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.

// 507 Insufficient Storage: The server is unable to store the representation needed to complete the request.
//syntax
// {
//   "error": {
//     "code": 400,
//     "message": "Invalid request parameter: 'username' is required"
//   }
// }

// CSS border Property
// The border property is used to create a line around the element's content and padding. It is part of the element's box model and affects the layout of the page by increasing the size of the element. Borders are drawn inside the element's dimensions.
// CSS outline Property
// The outline property is similar to the border, but there are key differences:

// Outlines do not take up space: They are drawn outside the element's border, and they do not affect the element's size or layout.
// Outlines are not part of the box model: They don't push content or increase the size of the element like borders do.
// Outlines are often used for focus indicators: For example, when a user tabs through interactive elements.

//CSS
//For basic reflection effects, using CSS with the filter property and transformations is usually sufficient. If you require more advanced visual effects, consider exploring SVG filters.

// let x={}, y={name:"satish"}, z={name:"pratik"}
// x[y]={name:"Salman"}
// x[z]={name:"SharRukh"}
// console.log(x[y]) //{name:ShahRukh} //it will overwrite

// console.log(1>2<3) //true 1>2 false mean 0<3 true

// Key Characteristics of a First-Order Function:
// It does not accept another function as an argument.
// It does not return a function as a result.
// It only works with simple data types or objects.

// 1. Self Padding (Padding)
// In CSS, padding refers to the space between the content of an element and its border. Self-padding could imply that the padding is applied to an element itself to create space between the content and the element's edges.

// 2. Self Spacing (Margin, Gap)
// Spacing in web design generally refers to the distance between elements, which is often controlled by margins or gaps (in flexbox and grid layouts). Self-spacing may refer to an element's margin that creates space around itself.

//marquee tag
// The <marquee> element in HTML was used to create scrolling text or images across the screen. It allows content (like text or images) to move horizontally or vertically within a web page.

//CSS float property
// The CSS float property is used to position elements to the left or right within their container,
// float: left | right | none | inherit;

//Z index
// The z-index property in CSS controls the stacking order of elements that overlap each other

//CSS counter
//CSS counters provide a powerful and flexible way to manage automatic numbering in your designs.

// let x ={name:'soumya',age:22}
// let y ={name:'soumya',age:22}
// console.log(x===y); //false  two different objects, each occupying its own space in memory, even though their contents (properties and values) are identical
// console.log(JSON.stringify(x)===JSON.stringify(y)); //true

// let x =2
// let y =2
// console.log(x===y); //true

// var x; // undefined
// x++; // undefined++ coerced to NaN
// console.log(x); //NaN
// x=9;

// let x=undefined++
// console.log(x);

// for (var i=0;i<5;i++){
// console.log(i); //01234
// setTimeout(()=>{
//   console.log(i)
// },1000)
// } //five times 5

// function func1(n){
//   if (n==0) return 1;
//   func1(n-1)
//   console.log(n);
// }
// func1(3); //function recursion
//The recursion starts with the highest value (3) and counts down to 0, but doesn't print anything for 0.
// As the function unwinds (returns back to previous calls), it prints the numbers in increasing order (from 1 to 3).

// let str="soumya is a very good boy"
// let str1=str.split(" ")
// str1.forEach(element => {
//   console.log(element);
// });

// const arr=[1,2,3,4,5]
// // output=120
// const result=arr.reduce((acc,cur)=>acc*cur)
// console.log(result);

// Aspect	Function Expression	Function Declaration
// Definition	Named function defined with function keyword.	Function assigned to a variable.
// Syntax	function name() {}	const name = function() {}
// Hoisting	Hoisted; can be called before definition.	Not hoisted; cannot be called before definition.
// Name	Always has a name (the function name).	Can be anonymous or named.
// Usage	Typically used for defining reusable functions.	Often used for callbacks and inline functions.

// console.log(1+"1"+1); //111
// console.log(1-"1"+1); //1

// splice()
// Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array.
// item1, item2, ...: Elements to add to the array (optional).
// const arr=[1,2,3,4,5,6,7,8]
// let result=arr.splice(2,0,8,9,7,89)
// console.log(arr);

// Use slice to create a new array without modifying the original.
// Use splice to modify the original array by removing or adding elements.

// console.log(isNaN("soumya")) //true
// console.log(isNaN(console.log(2)))  //true
//This prints the value 2 to the console.
// However, the return value of console.log() is undefined. This is because console.log() is a function that logs output but doesn't return anything meaningful. So, it returns undefined implicitly.
//isNaN(undefined)= true

//First order function
// A first-order function is simply a regular function that:
// Does not take other functions as arguments.
// Does not return a function as its result.

// To check whether a variable is an array in JavaScript, you can use the built-in method Array.isArray().
// const arr = [1, 2, 3];
// const notArr = "Hello";
// console.log(Array.isArray(arr));    // Output: true
// console.log(Array.isArray(notArr)); // Output: false

//undefined vrs undeclaired
// let x
// console.log(x) //undefined

// console.log(c) //undeclaired

// void elements (also known as self-closing elements) are elements that do not have any content and cannot have closing tags. alternative name is empty tag.

//WeakMap 
//In short, a WeakMap helps you store extra data about objects, and JavaScript automatically cleans up when those objects are no longer needed, preventing memory waste.

// Create a WeakMap
// let weakMap = new WeakMap();

// Create multiple objects
// let user1 = { name: "Alice" };
// let user2 = { name: "Bob" };
// let user3 = { name: "Charlie" };

// Add objects as keys with associated values
// weakMap.set(user1, { age: 25, email: "alice@example.com" });
// weakMap.set(user2, { age: 30, email: "bob@example.com" });
// weakMap.set(user3, { age: 22, email: "charlie@example.com" });

// Access the data using the objects as keys
// console.log(weakMap.get(user1)); // Output: { age: 25, email: "alice@example.com" }
// console.log(weakMap.get(user2)); // Output: { age: 30, email: "bob@example.com" }
// console.log(weakMap.get(user3)); // Output: { age: 22, email: "charlie@example.com" }

// If you stop using an object, it can be garbage-collected
// user1 = null;

// The data for user1 is now eligible for garbage collection
// weakMap automatically cleans up, so you can no longer access user1's data

//what is buffer class?
//In JavaScript (specifically in Node.js), the Buffer class is used to handle binary data directly. It's not available in browser JavaScript but is part of Node.js, designed to work with raw binary data in a way that's similar to how arrays work with other types of data.

// Buffers are useful when you need to work with streams of binary data, such as when handling files, network protocols, or any form of binary input/output.

//Webpack
//Webpack is a powerful module bundler commonly used in React.js applications. It takes your JavaScript, CSS, images, and other assets, and bundles them into a single or smaller number of output files optimized for the browser.

//React-Redux
// Example Flow:
// User clicks a button → an action is dispatched.
// The reducer processes the action and returns a new state.
// The store updates the state and informs the UI to re-render if needed.

//Redux-Thunk
//Redux Thunk is a middleware that makes handling asynchronous actions in Redux more manageable. It allows action creators to return functions instead of plain action objects, which can then be used to perform async operations and dispatch actions based on the outcome of those operations.


//Diff. between redux-thunk and redux-saga
// Feature	                Redux Thunk	                                  Redux Saga
// Async Handling	         Imperative (callbacks, promises)	     Declarative (generators, effects)
// Setup Complexity	       Simple, less boilerplate	             More complex, requires generators
// Control Flow	           Chained promises and callbacks	       yield for control, advanced flows
// Error Handling	         Using .catch() in promises	           Using try/catch in generator funcs
// Learning Curve	         Low	                                 High (requires understanding of generators)
// Best For	               Small to medium apps, simple async	   Complex async flows, large apps

//Difference between classbased and functional component
// Feature	               Class-based Component	                      Function-based Component
// Syntax	Extends          React.Component, requires render()	        Simple function that returns JSX
// State Management	       this.state and this.                       setState()	useState() hook
// Lifecycle Methods	     componentDidMount, componentDidUpdate, etc.	   useEffect() hook
// Performance	       Slightly higher overhead due to class structure.	Generally better, simpler, and faster
// Hooks	           Cannot use hooks                         	Can use hooks like useState, useEffect, etc.
// Code Readability	      More boilerplate and complexity	            Shorter, cleaner, and more readable
// Use Cases	     Older codebases, when lifecycle methods are needed.	Modern development, recommended for new projects

//Difference between export and export default
//Feature	                   export default	                       export (Named Export)
// Number of Exports	     Only one per file	Multiple exports allowed in a single file
// Import Syntax	       import MyComponent from './MyComponent';	import { MyComponent } from './MyComponent';
// Flexibility          on Import Name You can name the import whatever you want. 	You must use the exact name from the export
// Use Case        	When you want to export one main item from a file	      When you want to export multiple values from a file
// Example	        export default MyComponent;	                 export const MyComponent = ...;


//e.g-export default
// const Button = () => {
//   return <button>Click me!</button>;
// };

// export default Button;
// import Button from './Button'; // No curly braces needed
//export
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// import { add, subtract } from './utils'; // Use curly braces

// Reconciliation 
// In React refers to the process by which React updates the DOM to reflect the latest state of the UI. It involves comparing the newly rendered virtual DOM (the result of the component's render method) with the previous virtual DOM, and then determining the minimal set of changes required to update the actual DOM efficiently.

// Server-Side Rendering (SSR) 
// In React is the process of rendering the app on the server and sending pre-rendered HTML to the client, which can improve the initial load time and SEO. While it comes with some complexity and challenges, it provides significant benefits in terms of performance and search engine optimization, especially for content-heavy or SEO-dependent websites.

//how can i change my current port which is running right now in my current react application?
//"scripts": {
  // "start": "cross-env PORT=4000 react-scripts start"
// }

// Higher Order Component (HOC) 
// In React is a function that takes a component and returns a new component with additional props or functionality. It is a pattern used to reuse component logic across multiple components.

// In simple terms, a Higher Order Component is like a wrapper component that adds extra functionality or behavior to the component it wraps. It doesn't modify the original component directly but enhances it in a reusable way.