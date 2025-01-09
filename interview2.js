// const x=(4,5,6)
// console.log("x =",x);

// function abc(){

// }
// var abc;
// console.log(abc); //[function: abc] //takes function as first priority and also abc is not assign any value

// let n =10;
// console.log(n.toString()); //10 //default is decimal value so it will print 10 only. 
// console.log(n.toString(8)); //12
// n.toString(16) (Hexadecimal): "a"
// n.toString(8) (Octal): "12"
// n.toString(10) (Decimal): "10"

// function a(){
//     console.log("object");
// }
// console.log(a()); //object undefined

// function abc(){
//     console.log("xyz");
// }
// console.log(abc.name); //abc

// console.log(abc); //abc is not defined

// var abc =100;
// let xyz=200;
// console.log(window.abc); //100
// console.log(window.xyz); //reference error: window is not defined

// function abc(n1,n2){
//     "use strict"
//     n1=300;
//     n2=400;
//     return arguments[0]+arguments[1]
// }
// console.log(abc(100,200)); //300

// "use strict"
// {
//     function abc(){
//         console.log("abc");
//     }
// }
// abc() //reference error: abc is not defined
//abc if "use strict" is not there

// function abc(){
//     a=8;
//     console.log(a);
// }
// abc() //ReferenceError: Cannot access 'a' before initialization
// let a;

// class abc{

// }
// console.log(typeof(abc)); //function

// new xyz() //ReferenceError: Cannot access 'xyz' before initialization
// function abc(){
//     console.log("object");
// }
// class xyz{ //clas is not hoisted

// }

// const abc = 10 + isNaN(2) ? 100 : 200; //for truthy value it will return 100
// console.log(abc);

// console.log(10==10); //true
// console.log(10==10==10); //false
// console.log(10==10==10==0); //true

// console.log(parseInt(""));  // NaN (no numbers to parse)
// console.log(Number(""));  // 0   (empty string coerced to 0)
// console.log(parseInt(true));  // NaN
// console.log(Number(true));  //1

// Feature	                 package.json	                        package-lock.json
// Purpose	Defines project metadata and dependencies.	        Locks exact dependency versions.
// Editable	Manually edited by developers.	                    Automatically generated by npm.
// Version  Control	Specifies version ranges for dependencies.	Ensures exact versions are installed.
// Scope	High-level dependency list.	                        Detailed dependency tree(includes sub-dependencies)
// Reproducibility	Allows flexibility in versions.	            Guarantees consistent installs.

// In package.json, a caret (^) in a dependency version specifies a version range. It allows for flexibility in upgrading to newer versions of the dependency, as long as the upgrades do not break the major version (based on Semantic Versioning).
// MAJOR.MINOR.PATCH
// MAJOR: Breaking changes
// MINOR: Backward-compatible new features
// PATCH: Backward-compatible bug fixes

// Caret (^) Rule:
// Allows updates to MINOR and PATCH versions, but not MAJOR.
// "express": "^4.17.1"
// This means: Accept versions >= 4.17.1 but < 5.0.0.

//Exact version (no prefix):"express": "4.17.1"

// Tilde (~):
// "express": "~4.17.1"
// Allows updates to PATCH versions: >= 4.17.1 but < 4.18.0.

// Key Differences
// Feature	npm	npx
// Purpose	Manages packages (install/update/remove).	Executes packages without global installation.
// Usage	Used to add dependencies to a project.	Used to run package binaries or CLI tools directly.
// Global Installation	Often requires global installation for CLI tools.	No need to install globally; downloads  and runs on demand.
// Dependency Management	Works with package.json to manage project dependencies.	Executes a package and its binaries, regardless of package.json.
// Temporary Use	Not ideal for temporary use of packages.	Perfect for one-time or temporary usage.

//The <marquee> tag in HTML is used to create a scrolling text or image effect, moving horizontally or vertically across the web page.

// let count=0;
// const nums=[0,1,2,3]
// nums.forEach((nums)=>{
//     console.log(nums)
//     if(nums){
//         count=count+1
//     }
// })
// console.log(count) //3 for 0 it will not count

// const arr=[2,3,4,5]
// arr.slice(0,1) //slice method create a new array without modifying the existing array
// console.log(arr) //[2,3,4,5]

//slice() methods:
// const fruits = ["apple", "banana", "cherry", "date"];
// const sliced = fruits.slice(1, 3); // Extracts from index 1 to 3 (excluding 3)
// console.log(sliced); // Output: ["banana", "cherry"]

//splice() methods:
// const fruits = ["apple", "banana", "cherry", "date"];
// Remove 2 elements starting from index 1
// const removed = fruits.splice(1, 2);

// console.log(fruits); // Output: ["apple", "date"] (modified original array)
// console.log(removed); // Output: ["banana", "cherry"] (removed elements)

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   "a": 5,
//   b: 7,
// };
// console.log(obj); //{ a: 5, b: 7, c: 3 }

// console.log(!"hello"); //false
// console.log(+false); //0
// console.log(""==false); //true
// console.log(""===false); //false

// var a = 1+ abc
// var abc=100 //it will hoisted to the top but the value is undefined.so,it will print NaN
// console.log(a); //NaN

// const data={
//     name:"soumya"
// }
// const arr=[1,2,3,4,5]
//delete operator always retuns the boolean value
// console.log(delete data); //false
// console.log(delete arr); //false
// console.log(delete arr[1]); //true

// const [x, y] = abc;
// console.log(x, y); //ReferenceError: abc is not defined

//infinity curring
// function sum(a) {
//     return function inner(b) {
//       if (b === undefined) {  // Termination condition
//         return a;
//       }
// Return the function itself for chaining
//       return sum(a+b)
//     }
//   }
    
//   console.log(sum(1)(2)(3)(4)());

//Use Cases of the <canvas>:
// Drawing 2D shapes: Rectangles, circles, lines, etc.
// Rendering images: You can draw images and manipulate them on the canvas.
// Creating animations: By continuously updating the canvas, you can create dynamic animations.
// Games: HTML5 canvas is often used for rendering game graphics.
// Graphs and charts: You can use the canvas to draw visual data representations like bar charts or line graphs.

//Pseudo-Elements are used to style specific parts of an element, rather than the whole element itself. They allow you to apply styles to certain content or portions of an element that are not part of the actual HTML structure, like the first letter of a paragraph or the content before or after an element.

// const arr=[1,2,3,4,5]
// const result=arr.map((ele)=>{
//     return ele>2
// })
// console.log(result); //[ false, false, true, true, true ]

//Object Destructuring
// const person = {
//     name: "Alice",
//     age: 25,
//     country: "USA"
//   };

//   const { name, age, country } = person;
//   console.log(name); // Alice
//   console.log(age); // 25
//   console.log(country); // USA

// Feature                	<a> Tag	                                           <link> Tag
// Purpose	Creates a hyperlink for navigation (clickable link).	Links external resources to the document (e.g., CSS, icons).
// Common Usage	Navigating to other pages or resources.	Linking external stylesheets, icons, or preloading assets.
// Attributes	href, target, title, rel, etc.	            rel, href, type, sizes, etc.
// Display	    Creates a clickable element (text or link).	Does not display anything on the page.
// Placement	Anywhere in the body of the document.	    Usually placed in the <head> section of the document.
// Self-closing	No, it requires both an opening and closing tag (<a></a>). Yes, it is self-closing (<link />).

// const arr = [1, 2, 3, 4][1, 2, 3]; // Interpreted as [1, 2, 3, 4][3]
//take second array is an expression and retun the last value mean arr[3]
// console.log(arr); // Output: 4

// let  obj={
//     1:"a",
//     2:"b",
//     "2":"b",
//     [1]:"b"
// }
// console.log(obj); //{ '1': 'b', '2': 'b' }

// {
//     function fn1(){
//         console.log("Hi");
//     }
// }
// fn1() //Hi

// function fn(){
//     return 100;
// }
// var fn
// console.log(fn); //[Function: fn],it take function as higher priority

// class abc{

// }
// console.log(typeof(abc)); //typeof class is function

// console.log(null==undefined); //true
// console.log(null===undefined); //false

// const arr=[1,2,3,4,5]
// const res=arr.find(ele=>ele>2)
// console.log(res)  // result:3  //find method always returns the first elemnt after checking the condition

// function sum(a=100,b=200){
//     return a+b
// }
// console.log(sum(null,20));  //0+20=20

// function sum1(a=100,b=200){
//     return a+b
// }
// console.log(sum1(undefined,20)); //100+20=120

// const arr=[1,2,3,4,5]
// console.log(arr.unshift(9)); //6
// console.log(arr); //[ 9, 1, 2, 3, 4, 5 ]
// console.log(arr.slice(1,3));//[ 2, 3 ]
// console.log(arr); //[ 1, 2, 3, 4, 5 ]

// var a = 10;
// console.log(a); // 10 bcz var is override the function
// function a() {
//   console.log("object");
// }
// console.log(a); // 10

// console.log(Array(1,2)) //[ 1, 2 ] the arguments are treated as the elements of the array.
// console.log(Array(2)) //[ <2 empty items> ] / Array() with a single numeric argument, it creates an array with a length equal to that number, but the array is empty (uninitialized).

// if (NaN){
//     console.log("Hi i am there");
// }else{
//     console.log("Hi i am not there");
// } //it will print Hi i am not there because NaN is falsy value

//common function for add(1,2) and add((1)(2))
// function add(a, b) {
//     if (b) {
//       // Case 1: add(1, 2)
//       return a + b;
//     }
//     // Case 2: add(1)(2)
//     return function (b) {
//       return a + b;
//     };
//   }

//   // Usage
//   console.log(add(1, 2));   // Output: 3
//   console.log(add(1)(2));   // Output: 3

// function abc(){
//       console.log(abc.xyz)
//   }
//   abc()
//   abc.xyz=400;
//   abc.xyz=200;
//   abc() //undefined and 200

// const arr=[..."soumya"]
// console.log(arr); //[ 's', 'o', 'u', 'm', 'y', 'a' ]

// console.log(parseInt("10+2")); //10
// console.log(parseInt("7FM")); //7
// console.log(parseInt("M7F")); //NaN
// console.log(parseInt("123.45"));  // 123 (stops at the decimal point)
// console.log(parseInt("  99"));    // 99 (ignores leading spaces)
//parseInt parses until it encounters an invalid character for the given base.
//If the first character is invalid, it immediately returns NaN.

// console.log([1,2].map(num=>{
//       if(num>0) return;
//       return num*2;
// })); //[ undefined, undefined ]

// function abc(){
//       return ;
// }
// console.log(abc()); // undefined

// "use strict"
// {
//       function abc(){
//             console.log("Soumya");
//       }
// }
// abc()

// function abc(a,b){
//       // "use strict"
//       a=100
//       b=200
//       return arguments[0] + arguments[1]
//       console.log(a+b);
// }
// console.log(abc(300,400));

// console.log(abc())
// function abc(){
//     console.log("Soumya")
// }
// abc() //Soumya undefined Soumya

// var mix = ["a", "e", 3, 4, 5, "y", "u", undefined, undefined]; // Replace undefined values here
// const number = [];
// const string = [];
// const garbage = [];

// mix.forEach((val) => {
//     if (typeof val === "string") {
//         string.push(val);
//     }
//     if (typeof val === "number") {
//         number.push(val);
//     }
//     if (typeof val === "undefined") {
//         garbage.push(val);
//     }
// });

// console.log("Strings:", string);   // ["a", "e", "y", "u"]
// console.log("Numbers:", number);   // [3, 4, 5]
// console.log("Garbage:", garbage);  // [undefined, undefined]

// const details={
//       name:"soumya",
//       age:26
// }
// const details1={...details}; //shallow copy
// const details1=details; //deep copy
// details1.name="dibya"
// console.log(details);

//divisible by 3 print fizz by 5 print buzz by both 3 & 5 print fizzbuzz
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log(i);
//     console.log("fizz");
//   } else if (i % 5 == 0 && i % 3 !== 0) {
//     console.log(i);
//     console.log("buzz");
//   } else if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//     console.log("fizzbuzz");
//   }
// }

// Aspect	                  Controlled Component	                   Uncontrolled Component
// Data Source	           React State	                              DOM (HTML element itself)
// React Involvement	   Fully manages the form element	Minimal,  only to get or set value via ref
// Use Case	               Preferred for dynamic or complex logic.	  Simpler use cases, or when React control
//                                                                    is unnecessary.
// Example of Access	   value={state} with onChange	              ref to access the value

// console.log(!false); //true
// console.log(!"soumya"); //false
// console.log("" == false); //true
// console.log("" === false); //false
// console.log(1 * false); //0

// how can you get the value of 40 without creating extra variable
// const [,,,a,]=[10,20,30,40,50]
// const {3:a}=[10,20,30,40,50]
// console.log(a);

//<!DOCTYPE html> is a key part of HTML5 documents that helps browsers render the content according to modern web standards, ensuring a consistent and expected behavior across different platforms. It is not a tag but an instruction to the browser about the version of HTML being used. The <!DOCTYPE html> declaration must be the first thing in an HTML document, before the <html> tag. It is case-insensitive and does not require a closing tag. The declaration tells the browser to render the document in standards mode, which helps avoid compatibility issues and ensures consistent rendering across browsers.

// Key Differences Between Semantic and Non-Semantic Elements: 
// Aspect	            Semantic Elements	                     Non-Semantic Elements
// Meaning	P       rovide meaning about the content inside	     No inherent meaning about the content
// Examples	        <header>, <footer>, <article>	             <div>, <span>
// SEO	            Helps search engines understand content	     Does not directly aid in SEO
// Accessibility	Improves screen reader interpretation	     Does not provide meaningful context
// Readability	    Code is more readable and structured	     Code is more generic and harder to understand

//The <iframe> tag in HTML is used to embed another HTML document within the current document. It creates an inline frame that allows you to display content from another webpage or a different source inside a section of your webpage. The <iframe> tag is commonly used to embed videos, maps, or other external content on a webpage. It has attributes like src, width, height, and title to specify the source URL, dimensions, and title of the iframe.
{/* <iframe src="URL" width="600" height="400" title="Description of the content"></iframe> */}

//Formatting Tag:
{/* <b>, <i>, <u>, <em>, <strong>, <mark>, <small>, <del>, <ins>, <sub>, <sup>, <q>, <code>, <pre>, <span> */}
// Semantic Tags: Tags like <em>, <strong>, <mark>, <del>, and <ins> provide meaning to the content and are useful for accessibility and SEO.
// Non-Semantic Tags: Tags like <b>, <i>, <u>, <span>, and <pre> are used purely for styling purposes without conveying any specific meaning.

//viewport: 
//In HTML refers to the visible area of a web page on a device screen, which can vary in size depending on the device (e.g., mobile, tablet, or desktop). The viewport meta tag is used to control how the page content is scaled and displayed on different devices, especially for responsive web design.
{/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3, user-scalable=yes"> */}

// Types of Attributes:
// id, class, src, href, alt, style, name, type, value, placeholder, target, disabled, checked, lang, title, readonly, maxlength, minlength, rel, action, method, for, contenteditable, data-*, tabindex, width, height, action, autocomplete, form, formaction, formmethod, formaction, formtarget, formnovalidate, allowfullscreen

// Global Attributes: 
// These attributes can be used on almost all HTML elements. Examples include id, class, style, title, and lang.
// Specific Attributes: 
// These attributes are specific to certain HTML elements. For example:
// <a> uses the href attribute.
// <img> uses the src and alt attributes.
// <input> uses the type, value, placeholder, etc.
// Boolean Attributes:
// Some attributes don’t require a value (e.g., checked, disabled, readonly). If present, they’re considered true, and if absent, they’re considered false.

// Browser Object Model (BOM):
// it is a set of objects that JavaScript uses to interact with the browser and its environment. While BOM itself is not directly related to CSS, you can use JavaScript (via BOM) to modify the style or behavior of your CSS based on various browser-related properties (like window size, location, etc.)
// Common BOM objects include window, screen, location, history, navigator, and document.
//console.log(window.innerWidth);  // Accessing the browser's window width
// console.log(window.location.href);  // Getting the current page URL
// console.log(window.navigator.userAgent);  // Getting user-agent information

// Box-sizing:
// This property is used to control how the total width and height of an element are calculated, particularly when padding and borders are added. By default, the width and height of an element are calculated by the content area only. However, when you apply padding or borders, they are added outside of the specified width and height, causing the total size of the element to increase.
// content-box (default value): The width and height of the element are calculated based on the content area only, excluding padding and border.
// border-box: The padding and border are included in the specified width and height of the element, so they don’t affect the total size.

//String Methods:
// .charAt(), .charCodeAt(), .concat(), .includes(), .indexOf(), .lastIndexOf(), .match(), .replace(), .search(), .slice(), .split(), .substring(), .toLowerCase(), .toUpperCase(), .trim(), .trimStart(), .trimEnd(), .padStart(), .padEnd(), .repeat(), .startsWith(), .endsWith(), .localeCompare(), .split(), .valueOf(), .matchAll(), .normalize(), .anchor(), .bold(), .fixed(), .italics(), .link(), .small(), .strike(), .sub(), .sup().
//Array Methods:
//.push(), .pop(), .shift(), .unshift(), .concat(), .join(), .slice(), .splice(), .forEach(), .map(), .filter(), .reduce(), .reduceRight(), .some(), .every(), .find(), .findIndex(), .indexOf(), .lastIndexOf(), .includes(), .sort(), .reverse(), .flat(), .flatMap(), .copyWithin(), .fill(), .from(), .keys(), .values(), .entries(), .at(), .concat(), .findLast(), .findLastIndex(), .includes().

// Key Differences Between Throttling and Debouncing:
// Feature	              Debouncing	                         Throttling
// Purpose	            Delays the function call until the event stops.	Limits the function call to once every interval.
// Use Case	            Ideal for events triggered by user input (e.g., typing, resizing)	Ideal for events triggered continuously (e.g., scrolling, mouse movement)
// Execution	        Executes after the last event, with a delay.	Executes at regular intervals, no matter how often the event occurs.
// Function Calls	    Only called once after the event stops.	Called at fixed intervals during the event.


//Difference between null and undefined:
// Assigning null to a variable to indicate that it has no value=null
// When a variable is declared but not initialized=undefined

// Seal() vs Freeze():
// Object.seal() allows modifications to existing properties but prevents adding or deleting properties.
// Object.freeze() prevents all modifications, including adding, deleting, or changing values of properties.

// how to stop event propagation in javascrit?
// event.stopPropagation() method is used to stop the propagation of an event, preventing it from bubbling up the DOM tree. This method is commonly used to prevent parent elements from handling the same event.
// HTML
{/* <button id="btn">Click me</button>
// JavaScript
const btn = document.getElementById('btn');
// Event listener on button to stop propagation
btn.addEventListener('click', function(event) {
  console.log("Button clicked");
  event.stopPropagation(); // Stops the event from bubbling up to the parent
});
// Event listener on body to show if propagation reaches here
document.body.addEventListener('click', function() {
  console.log("Body clicked");
}); */}
