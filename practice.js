//what is javascript
//it is a scripting language that enables you to creat a dynamically updated content,control multimedia,animated images etc... and not only it uses in browser but also you can use it in server.

//what is nodejs
//node js is the runtime environment of javascript used to build the scalable application and it can run in multiple os,and it is asynchoronous in nature.

//What is the newfeatures of HTML5 ?
// 1.semantic Element:
// HTML5 introduced several new semantic elements, such as <header>, <nav>, <article>, <section>, <footer>, and <aside>, which help structure a web page more meaningfully.
// 2.New Form Elements:
// HTML5 introduced new form input types, including <input type="date">, <input type="email">, <input type="url">, <input type="tel">, <input type="number">, and more, making it easier to capture specific data types.
// 3.Audio and Video Elements:
/*<audio controls> // Syntax
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>  */
// HTML5 added the <audio> and <video> elements, allowing developers to embed audio and video content directly into web pages without relying on third-party plugins like Flash.
// 4.Canvas Element:
// The <canvas> element enables dynamic rendering of graphics and images using JavaScript, providing a powerful tool for creating interactive and visually appealing applications.
// 5.Local Storage:
// HTML5 introduced the localStorage and sessionStorage APIs, allowing web applications to store data locally on the user's device, persisting even after the browser is closed and reopened.
// 6.Responsive Images:
// HTML5 introduced the srcset attribute for the <img> element, allowing developers to provide multiple image sources based on the device's screen size and resolution, improving responsiveness.
// 7.Drag and Drop:
// HTML5 introduced native support for drag-and-drop functionality, making it easier for users to interact with and move elements within a web page.
// 8.SVG (Scalable Vector Graphics):
// HTML5 includes native support for SVG, allowing developers to embed vector graphics directly into web pages. SVG is scalable, responsive, and can be manipulated with CSS and JavaScript.
// 9.Input Attributes: placeholder, autocomplete, and autofocus:
// HTML5 introduced new attributes for form inputs, such as placeholder for providing hints, autocomplete for controlling autofill behavior, and autofocus for automatically focusing on an input element when a page loads.
// 10.WebRTC (Real-Time Communications):
// HTML5 includes APIs for WebRTC, enabling real-time communication features like video chat and peer-to-peer data exchange directly in the browser without requiring plugins.

// what is the new features of Es6
// let and const Declarations
// Arrow Functions
// Template Literals
// Destructuring Assignment
// Rest and Spread Operators
// Promises
// map,filter and reduce
// Async/Await
// array.at method
// ternary operator

//let , var and const Difference
// 1.Scope:functionscope:var , blockscope: let and const (limited to that curly braces)
// 2.Hoisting: Variables declared with var are hoisted to the top of their function or global scope,variables declared with let and const are also hoisted but not initialized
// 3.Declairation:var redeclair and reassign,let reassign not redeclair,const not redeclair and nor reassign
// 4.Global Object Property:Variables declared with var become properties of the global object (window in browsers) when declared outside a function or block.
// let and const declarations do not become properties of the global object.
// 5.Default Value:Variables declared with var are automatically initialized to undefined.
// Variables declared with let and const are not automatically initialized and will throw an error if accessed before assignment.

//function
function myfunc(x, y) {
  return (x + y) / 2;
}
// console.log(myfunc(8,5))
// let a=3;
// let b=4;
// let c=4;
// let x=4;
// let y=4;
const sum = (a, b) => {
  return a + b;
};
// console.log(sum(x,y))

//function is a block of code designed to perform a particular task
//A JavaScript function is executed when "something" invokes it (calls it).
//Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.
// Function return value is the value returned by the function when it is executed.

const helloa = () => {
  // console.log("Hey how are you?");
  return "Soumya";
};
// helloa();
const e = helloa();
// console.log(e)

// Synchronous Programming
// Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
// const prompt = require("prompt-sync")();

// let a = prompt("What is your name")
// let b = prompt("What is your age")
// let c = prompt("What is your fav color")
// console.log(a+" "+"is"+" "+b+" "+"years old has"+" "+c+" "+"favorite color")

//Asynchronous Function:Which we initiate now and they finish later...
//Instructions in asynchronous code can execute in parallel.
//Next operation can occur while the previous operation is still getting processed.

// console.log("Start`")
// setTimeout(() => {
//     console.log("middle")
// }, 3000);
// console.log("End");

//Handel code line by line
// async function handel() {
//   console.log("start")
//       await new Promise((resolve)=>{
//           setTimeout(()=>{
//               console.log("middle")
//               resolve()
//           },2000)
//       })
//   console.log("end")
//   }
//   handel();

//CallBack Function:It is a function passed into another function as an arguement,which is then invoked inside the outer function to complete an action
function funcA(system) {
  setTimeout(() => {
    console.log(`Welcome funcA`);
    system();
  }, 3000);
}
const func = () => {
  console.log(`Welcome funcB`);
};
// funcA(func);

const personOne = (friend, callFriend) => {
  console.log(
    `I am Busy right now.I am talking to ${friend}.i will call you back`
  );
  callFriend();
};
const personTwo = () => {
  console.log(`hey Whats Up.I call back you dekha.`);
};

// personOne("Thapa", personTwo);

//Pass By Value vrs Pass By Reference
//Passed BY Value:primitive data type
// eg1:
// let a = 5;
// let b = a;
// b = b + 5;
// console.log(b);

//Passed By Reference:Nonprimitive Data type eg: objects,array
const obj1 = {
  user: "soumya",
  pass: "password",
};
// const obj2 = obj1;
const obj2 = Object.assign({}, obj1);

obj2.pass = "Param"; //Change the value in both objects if you dont use Object.assign({},objectname) method
// console.log(obj1)
// console.log(obj2)
// eg2:
const arr1 = [1, 2, 3, 4];
// const arr2 = arr1;
// if you want to change arr2 only then use this syntax
const arr2 = [].concat(arr1);
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
arr2.push(6, 7);
// console.log(arr1);
// console.log(arr2);

//Concat()
const hello = "Hello,";
// console.log(hello.concat("Kevin", ". Have a nice day."));

const greetList = ["Hello", " ", "Venkat", "!"];
// console.log("".concat(...greetList))

const subject = ["math", " ", "sociology", " ", "science", " ", "eng"];
// console.log("".concat(...subject))

// "".concat({}); // "[object Object]"
// "".concat([]); // ""
// "".concat(null); // "null"
// "".concat(true); // "true"
// "".concat(4, 5); // "45"

//what is call back hell?
//callback hell is essentilly nested callbacks stacked below one another forming a pyramid structure.
//every calbacks depands/waits for the previous callbacks,thereby making a pyramid structure that
//affects the readability and maintainability of the code.
//1:get student roll no after 2s
//2:get name and age  after 2s
//3:get gender after 2s
const studentdetail = () => {
  setTimeout(() => {
    console.log("Api getting roll no");
    let roll_no = [1, 2, 3, 4, 5];
    console.log(roll_no);

    setTimeout(
      (roll_no) => {
        const biodata = {
          name: "soumya",
          age: 23,
        };
        console.log(
          `my roll no ${roll_no} is name is ${biodata.name} and age is ${biodata.age}`
        );

        setTimeout(() => {
          biodata.gender = "male";
          console.log(
            `My gender is ${biodata.gender} and name ${biodata.name}`
          );
        }, 2000);
      },
      2000,
      roll_no[1]
    );
  }, 2000);
};
// studentdetail();

//Promises
//Promises are used to handel asynchronous operation in java script .they are easy to manage when dealing with multiple asynchronus operations where call backs can creat callback hell leading to unmanagable code.
//A promise ia an object that keep track about wheather a certain event has happened already or not
//Determines what happens after the events has happend.
//Promises are 3 stages
// 1.pending:event when start
// 2.resolve:fullfilled
// 3.reject:cancel
//executer function
//Pomise producing
const pob1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    reject("Error While Communicating");
  }, 2000);
});
//..Promises consumes
// pob1
//   .then((rollno) => {
//     console.log(rollno);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getBiodataa = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        const biodata = {
          name: "vinod",
          age: 24,
        };
        resolve(
          `My roll no is ${indexdata}.my name is ${biodata.name} and I am ${biodata.age} years Old`
        );
        reject("Error While Communicating");
      },
      2000,
      indexdata
    );
  });
};

pob1
  .then((rollno) => {
    // console.log(rollno);
    getBiodataa(rollno[1]).then((kuchbhi) => {
      // console.log(kuchbhi);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//eg2
const sum1 = new Promise((resolve, reject) => {
  let a = 2 * 2;
  if (a == 4) {
    resolve("correct");
  } else {
    reject("wrong");
  }
});

// sum1.then((message)=>{
//     console.log("ans is:"+message)
// }).catch((error)=>{
//     console.log("ans is:"+mesage)
// })
//extra added async and await
// async function result(){
//     try{
//         const o1=await sum1;
//     console.log(o1)
// }catch (error) {
//         console.log(error)
// }
// }
// result();

//Async and Await
//There's is  special syntax to work with promises in a more comfortable fashion,call "Async/await". it is surprisingly easy to understand and use.
//The Word 'async' before a function means one simple thing: a function  always returns a promise.
//so the async keyword is added to functions to tell them to return a promise rather than directly returning the value.
//we can use await when calling any function that returns a promise,including webAPI functions.
//The keywords await makes javascript wait until that promises settels and returns its result.

const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    reject("Error While Comunicating");
  }, 2000);
});
const getBiodata = (roll_no) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const biodata = {
          name: "vinod",
          age: 24,
        };
        resolve(
          `My roll no is ${roll_no}.my name is ${biodata.name} and I am ${biodata.age} years Old`
        );
        reject("data is not found");
      },
      2000,
      roll_no
    );
  });
};
async function getData() {
  const rollnodata = await pobj1;
  // console.log(rollnodata)

  const biodatas = await getBiodata(rollnodata[1]);
  // console.log(biodatas);
}
getData();

//MAP(),FIlTER(),REDUCE()
//foreach Loop:Array Methods:CAlls a function,once for each array element
const a1 = [2, 23, 5, 7, 28, 34];
// a1.forEach((value, index, array) => {
// console.log(`${index}=${value} ${array}`)
// });

// mongodb 5 employee highest salary get
//databasename.collectionname.sort({salary:-1}).limit(1)
//second highest salary
//db.employees.find().sort({ salary: -1 }).limit(2).skip(1)

// console.log(add(33));//33
// console.log(add(1,2,3));//6
// console.log(add(1,2,3,4));//10
// console.log(add());//err
// function add(...numbers){
//   if(numbers.length===0){
//     console.log("Error");
//   }
//   return numbers.reduce((sum,num)=>
//    sum+num
// );
//   }
// console.log(add(33));

//Hence forEach() method does not return a new array, whereas the map() method returns a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
//MAP():Creating a new array by performing some operations on each array element
let d = a1.map((value, index, array) => {
  // console.log(value,index,array)
  return value + 1;
});
// console.log(d)
// let arr3 = [
//   {
//     name: "John",
//     age: 20,
//   },
//   { name: "Jane", age: 26 },
// ];
// let f = arr3.map((value, index, array) => {
//   if (value.age === 20) {
//     return { ...value, name: "rahul" };
//   }
//   return value;
// });
// console.log(f)
//Filter():Filters am array with values that passes a test creat a new array
let h = a1.filter((value) => {
  return value > 7;
});
// console.log(h)
//Reduce():reduce an array to A single value
// let a2 = [2, 3, 4, 6];
// let k = a2.reduce((h1, h2) => {
//   return h1 + h2;
// });
// let m=a2.reduce((acc,ind)=>acc+ind,0)
// console.log(m);
// console.log(k)
//From(): Used to creat an array from any other object
let j = Array.from("Soumya Ranjan Behera");
// console.log(j)

//For...of:To get values from an array
for (let i of a1) {
  // console.log(i)
}

//For...in:To get indexs from an array
for (let i in a1) {
  // console.log(i)
}

//What is Middlewire?
//1.it's a function that will have all the access for requesting an object and respond to an object,and moving to the next midllewire function in the application request-respose cycle.
//2.send the response to the server before requesting.
//if next is not called within a middleware function, the request-response cycle is halted, and the response is sent back to the client.
// Middleware function 1
// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   next(); // Pass control to the next middleware function
// });

//What is event Emmiter?
// module that facilitates communication/interaction between objects in Node
//it is pattern that listen a named event,fires a callback,then emits the event with value

//What is REPL?(Read Evaluate Print Loop)
//It's an interactive shell that processes Node.js expressions.
//The shell reads JavaScript code which the user enters, evaluates the result of interpreting the line of code, prints the result to the user, and loops continues until the user signals to quit.

//bubbling and capture
//In bubbling the innermost elements event is handeles first and then outer.
//In capturing the outermost elements event is handeles first and then inner.
//addEventListener(event,function,useCapture)
//the default value is false which is for bubbling propagation,when the value is set to true the event use the capturing propagation

//ex:
// let box1=document.getElementById("box-1")
// box1.addEventListener("click",()=>{
// console.log('Box1 is clocked')
// })
// let container=document.getElementById("container-1")
// container.addEventListener("click",()=>{
// console.log('Box1 is clocked')
// },true)

//What is Clouser?
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}
// // Create a closure by calling outerFunction and assigning the result to a variable
let closureFunction = outerFunction();
// // Call the closure, which still has access to outerVariable
// closureFunction(); // Output: "I am from the outer function"

//What is Hoisting?
//Hoisting is the default behaviour of javascript where all the variables and function declairation are moved to the top
// const object=()=>{
//     console.log("Soumya is a good boy")
// }
// object();

//Explain “this” keyword.
//The “this” keyword refers to the object that the function is a property of.
var di = {
  name: "Soumya",
  getname: function () {
    // console.log(this.name);
  },
};
di.getname();

var obj3 = {
  name: "Soumya",
  getname: function () {
    console.log(this.name);
  },
};
var getname1 = obj3.getname;
var obj4 = {
  name: "Akshya",
  getname1,
};
//obj4.getname1()

//Explain call(), apply() and, bind() methods.
//CAll():
// It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.
//call() method allows an object to use the method (function) of another object
// eg:1
function hey() {
  console.log("Hello" + " " + this.name);
}
let obj5 = {
  name: "harry",
};
// return hey.call(obj5);
// eg: 3;

function saySomething(message) {
  console.log(this.name + " is " + message);
}
let person6 = { name: "John" };
saySomething.call(person6, "awesome");

// Returns "John is awesome"

//APPLY():
//call() method takes arguments separately whereas, apply() method takes
//arguments as an array.
function saySomething(message) {
  // console.log(this.name + " is " + message);
}
var person4 = { name: "John" };
// saySomething.apply(person4, ["awesome"]);
//BIND():
// This method returns a new function, where the value of “this” keyword will be
// bound to the owner object, which is provided as a parameter.

var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};
var person1 = { name: "Vivek" };
var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  "TS0122",
  "Bullet"
);
// Binds the displayDetails function to the person1 object
detailsOfPerson1();
// console.log(detailsOfPerson1())
// Returns Vivek, bike details: TS0452, Thunderbird

//What is Curring in javascript
//currying is an advanced technique to transform a function of arguments n, to n
// functions of one or fewer arguments.
//Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
//instead of this
function sum2(a, b, c) {
  return a + b + c;
}
// sum2(1, 2, 3); // 6
//curring does
// function sum2(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum2(1)(2)(3)) // 6

//higher order function
// takes one or more functions as arguments (i.e. a procedural parameter, which is a parameter of a procedure that  is itself a procedure), returns a function as its result.
// Callback function, passed as a parameter in the higher order function

// higher order function
function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}
function callbackFunction() {
  console.log("I am  a callback function");
}
// higherOrderFunction(callbackFunction);

//Explain Scope and Scope Chain in javascript.
// There are three types of scopes in JS:
// Global Scope
// Local or Function Scope
// Block Scope

// Mention some advantages of javascript.
// There are many advantages of javascript. Some of them are
// 1. Javascript is executed on the client-side as well as server-side also. There are a
// variety of Frontend Frameworks that you may study and utilize. However, if you
// want to use JavaScript on the backend, you'll need to learn NodeJS. It is
// currently the only JavaScript framework that may be used on the backend.
// 2. Javascript is a simple language to learn.
// 3. Web pages now have more functionality because of Javascript.
// 4. To the end-user, Javascript is quite quick.

//Types OF error in javascript
// Syntax error: Syntax errors are mistakes or spelling problems in the code that
// cause the program to not execute at all or to stop running halfway through.
// Error messages are usually supplied as well.
// 2. Logical error: Reasoning mistakes occur when the syntax is proper but the logic
// or program is incorrect. The application executes without problems in this case.
// However, the output findings are inaccurate. These are sometimes more difficult
// to correct than

// What is the use of a constructor function in javascript?
// Constructor functions are used to create objects in javascript.
// If we want to create multiple objects having similar properties and methods,
// Constructor functions are used.

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// var person1 = new Person("Vivek", 76, "male");
// console.log(person1);

// object destructuring?
// to extract properties from objects and bind them to variables
// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43
// };

// const { name, age } = user;
// console.log(name, age);  //Output, Alex 43

// What is DOM?
// DOM stands for Document Object Model. DOM is a programming interface for
// HTML and XML documents.
// When the browser tries to render an HTML document, it creates an object based
// On the HTML document called DOM. Using this DOM, we can manipulate or
// Change various elements inside the HTML document.

//hoisting
// y = 8;
// console.log(y);
// var y;

//console.trace() by using this method we can know the function where it is derived(know the grandparent,parent,child,innerchild of the function)

//What is EventLoop?
//Event loop is basically the runtime model of javascript, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
//This model is quite different from models in other languages like C and Java.

//Single threaded-Single task execution,no parallel execution,simplycity,eventloop

//Multithread - it provides an API for creating additional threads through Worker Threads module for CPU-intensive  tasks.These additional threads can execute code concurrently, leveraging multi-core systems.Node.js is inherently single-threaded. However, it does support asynchronous programming, which allows it to handle many concurrent operations efficiently without needing to spawn multiple threads.

//Cluster - Cluster is used to make the application scalable,and can create child processes that share same server  port., enabling your Node.js application to take advantage of multi-core systems.By distributing the workload across multiple worker processes.

// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

// Fork worker processes
//   for (let i = 0; i < numCPUs; i++){
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//   });
// } else {
// Worker process, run your Node.js application here
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello, World!\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

//Eventdriven - "event-driven" means that much of the functionality is based on events and event handling.

//Array prototype - Array prototype provides methods and properties that are available for manipulating all arrays  in JavaScript
// Array.prototype.sum = function() {
//   return this.reduce((acc, curr) => acc + curr, 0);
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.sum()); // Output: 15

//How can i push the value to an array even after i can declair it through const
// const arr=[]
// arr[0]=2
// console.log(arr)
// In JavaScript, declaring a variable as const means that the variable cannot be reassigned to a different value. However, it does not mean that the value itself is immutable.

// When you declare an array using const, you're saying that the variable arr will always reference the same array. You can't reassign arr to point to a different array. But you can still modify the array itself, like adding or removing elements.

//console.log(x); // ReferenceError: Cannot access 'x' before initialization
// const x = 6;
//in case of var it will show undefined and in case of let and const it will show reference error you cannot access  x before initialize.

//console.log(x())
// function x(){
//   return 30;
// } //it will return 30

// console.log(x);
// var x=()=>{
//     return 30;
// } //undefined

// console.log(x);
// const x=function y(){
//     return 30;
// } //Cannot access 'x' before initialization

//HTTP methods
// 1. GET:
// Purpose: Retrieves data from a specified resource.
// Usage: Typically used for reading or fetching data.
// Safety: Considered safe because it should not modify any resources on the server.
// Idempotent: Multiple identical requests should produce the same result each time.
// Example: Fetching a user's profile information from a server.
// 2. POST:
// Purpose: Submits data to be processed to a specified resource.
// Usage: Commonly used when creating new resources or submitting form data.
// Safety: Not considered safe as it may modify or create resources on the server.
// Example: Submitting a registration form to create a new user account.
// 3. PUT:
// Purpose: Updates data on a server.
// Usage: Typically used to replace the entire resource with the new data provided.
// Idempotent: Multiple identical requests should have the same effect as a single request.
// Example: Updating a user's profile information with new data.
// 4. DELETE:
// Purpose: Deletes a specified resource from the server.
// Usage: Used to remove resources from the server.
// Idempotent: Multiple identical requests should have the same effect as a single request.
// Example: Deleting a user account from the server.
// 5. PATCH:
// Purpose: Applies partial modifications to a resource.
// Usage: Used when you want to apply a partial update to a resource rather than replacing the entire resource.
// Example: Updating only the email address of a user's profile without affecting other fields.
// 6. HEAD:
// Purpose: Retrieves only the headers of the response, not the body.
// Usage: Useful for checking the status of a resource without downloading the entire content.
// Example: Checking if a file has been modified on the server without downloading the entire file.
// 7. OPTIONS:
// Purpose: Describes the communication options for the target resource.
// Usage: Typically used to determine the allowed methods and other capabilities supported by a web server.
// Example: Checking which HTTP methods are allowed on a particular endpoint.
// OPTIONS /api/users HTTP/1.1
// Host: example.com
// inResponse
//  HTTP/1.1 200 OK
// Allow: GET, POST, PUT, DELETE
// 8. TRACE:
// Purpose: Echoes the received request so that a client can see what changes or additions have been made by intermediate servers.
// Usage: Primarily used for diagnostic purposes.
// Example: Debugging and tracing the route of an HTTP request through various proxies or servers.
// 9. CONNECT:
// Purpose: Establishes a connection to the server, typically for SSL tunneling.
// Usage: Used when a client needs to establish a secure tunnel through which it can communicate securely with the server.
// Example: Establishing a secure connection to a proxy server for secure communication

//what is the difference between normal function and arrow function
// this Binding:Normal function support this binding but arrow function doesn't support.
//new keyword:
// Normal Function:
// Can be used as constructor functions with the new keyword to create new objects.
// Arrow Function:
// Cannot be used as constructor functions; attempting to use new with an arrow function will result in an error.
// prototype Property:
// Normal Function:
// Has a prototype property, which can be used to add properties and methods to all instances created with that constructor function.
// Arrow Function:
// Does not have a prototype property because they cannot be used as constructor functions.

// 3. Arguments Object:

// Normal Function:
// Has access to the arguments object, which is an array-like object containing all the arguments passed to the function.
// function myFunction() {
//   console.log(arguments); // Outputs: [1, 2, 3]
// }
// myFunction(1, 2, 3);
// Arrow Function:
// Does not have its own arguments object. If you need to access arguments, you can use rest parameters ...args instead.
//const myArrowFunction = (...args) => {
//   console.log(args); // Outputs: [1, 2, 3]
// };
// myArrowFunction(1, 2, 3);

//Cors
//CORS, or Cross-Origin Resource Sharing, is a security feature in web browsers that allows a website to request resources from another domain. It uses HTTP headers to let a server specify which domains are permitted to access its resources, enabling safe communication between different websites.

//Difference between promises and async/await
// Key Differences
// Syntax and Readability:

// Promises use .then() and .catch(), which can result in more nested and less readable code, especially with multiple asynchronous operations.
// async/await provides a more synchronous-looking code structure, which can be easier to read and maintain.
// Error Handling:

// Promises handle errors using .catch().
// async/await handles errors using try/catch blocks, which is similar to synchronous error handling.

// Chaining:
// Promises allow easy chaining of multiple asynchronous operations using .then() and .catch().
// async/await handles chaining by simply using multiple await expressions in a sequential manner.

// Creating three promises and execute them parallaly and that shold be stored in a array.
// const promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve('Promise 1 resolved'), 1000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => resolve('Promise 2 resolved'), 2000);
// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(() => resolve('Promise 3 resolved'), 1500);
// });

// Adding promises to an array
// const promiseArray = [promise1, promise2, promise3];

// Executing promises in parallel using Promise.all
// Promise.all(promiseArray)
//   .then((results) => {
//       console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//       console.error('One of the promises failed:', error);
//   });


// Controlled Component:
// Definition: A controlled component is a component where React controls the form element's value through state.
// e.g
// import React, { useState } from 'react';

// function ControlledComponent() {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <input type="text" value={value} onChange={handleChange} />
//   );
// }

//Uncontrolled Component:
// Definition: An uncontrolled component is a component where the form data is handled by the DOM itself, not by the React state.

// import React, { useRef } from 'react';

// function UncontrolledComponent() {
//   const inputRef = useRef(null);

//   const handleSubmit = () => {
//     alert(`Input value: ${inputRef.current.value}`);
//   };

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// }
