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

// what is fragment in react?

//lifecycle method in react?

//diff between axois and fetch?
//difference between strong and bold tag?
//diff. between metertag and progress tag in html?
//use of required attribute in html?
//what is data list?
//diff between em tag and i tag?
//what is empty tag? which not closing tag like br ,hr etc
//specificity of css
//how can we add gradient in css
//diff flexbox in grid?
//what id and 2d?
//what is css overflow?
//property for image reflection?
//attribute selectors?
//psedo element in css?

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








