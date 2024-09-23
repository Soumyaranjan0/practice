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
//redux is used in big project while contextapi is used in samll to medium project

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
//     ...a
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
// //Ensures the loop runs as long as the longest of the two strings.
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
// progress battery bar meter-colour progress and progress-grey progress

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

//what is empty tag? which not closing tag like br ,hr etc

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
//Using the ::after pseudo-element to mirror and position the reflection.
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

// {
//     var a =1 //global scope you can retrive it also outside the scope
// }
// console.log(a);

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

// you can combine (or merge) rows and columns using the rowspan and colspan attributes.

// div {
//     border: 2px solid red; /* Border inside the box model */
//     outline: 2px solid blue; /* Outline outside the border */
//   }

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

// console.log(abc); //reference errpr: abc is not defined
// abc="soumya"

// const arr=[200,100,330,70]
// arr.sort()
// console.log(arr) //[ 100, 200, 330, 70 ]
// console.log((a,b)=>a-b); //[ 70, 100, 200, 330 ]

// function abc(xyz){
// console.log(~~xyz);
// }
// abc(1.87) //1

// console.log([]==[]); //false
// console.log([]=="") //true //because of type coercion .JavaScript will try to convert one or both values to a common type i.e string.
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
// arr.splice(2,1) //length: 4
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

//lists in css
// Ordered List	<ol>	Use when the order matters.
// Unordered List	<ul>	Use when the order doesn’t matter.
// Description List	<dl>	Use for term-description pairs.
// Nested Lists	<ol>, <ul>	Use for hierarchical lists.

