const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.sort();
// console.log(citrus);

// const array=[,,,]
// console.log(array[2]);

{
// b=4
// console.log(b);
// var b ;    
}

// == & ===
// const a ="10"
// const b =10
// console.log(a==b);
// console.log(a===b);

//IIFE
// (function (value) {
//     console.log("Hello"+ " "+value);
// }("Soumya"));

//Reduce Method in javascript

//syntax:array.reduce(callback,initialvalue)
//in call back you may be take accumulator,current value,current index,array as parameter
//array.reduce((acc,curval,curind,array)=>{},(initial value))

// let c =[24,50,20]
// function verifylen(arr){
//  let combinelength=arr.reduce((acc,crrentvalue)=>acc+crrentvalue,0)//Here acc is the initial value which is set to 0 and current value is the element which is add to the initialvalue/acc value on each iteration.
//  return combinelength<60
// }
// console.log(verifylen(c));

// finding second largest number of array

// let a = [20, 67, 56, 39, 57, 37];
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[j]>a[j+1]){
//             let temp=a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//         }  
//     }
// }
// console.log(a[a.length-2]);
// // Sort the array in descending order
// let sortedArray = a.sort((a, b) => b - a);

// // The second-largest number is at index 1
// let secondLargest = sortedArray[1];

// console.log(secondLargest); // Output: 57

//find numbers osf a mixed array
// let a =[6,4,5,-2,true,NaN,"technique"]

// const b =a.filter((num)=>typeof(num)==="number" && !isNaN(num));
// console.log(b);

//find the largest number of array
// let largestnumber=(arr)=>{
//     let number =arr[0];
//     for (let a of arr){
//         if (a>number){
//             number=a;
//         }
//     }
//     return number;
// }
// let d=[3,6,3,5,6,66,56]
// console.log(largestnumber(d));
//or
// const numbers = [4, 7, 1, 9, 12, 5];
// let largestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];
//     }
// }
// console.log(largestNumber);

// let d=[3,6,3,5,6,66,56]
//     let largestnumber = d[0];
//     for(let a of d){
//         if (a>largestnumber){
//             largestnumber=a;
//         }
//     }
// console.log(largestnumber)

//or

// let d=[3,6,3,5,6,66,56]
// let largestnumber=Math.max(...d)
// console.log(largestnumber)

// let a = [1,2,3,4,5 ];
// let b =a.reverse();
// console.log(b);

//generate a random value b/w 1 to 6
// console.log(Math.floor(Math.random()*6)+1)
// console.log(Math.random());

// check if two statements are anagrams or not
// let a = " soumya"
// let b = "ymauso"
// let c = a.trim().split("").sort().join("").toLowerCase()
// let d = b.trim().split("").sort().join("").toLowerCase()
// console.log(c);
// console.log(d);
// console.log(c===d);

//filter method

// let arr3 = [
//     {
//       name: "John",
//       age: 20,
//     },
//     { name: "Jane", age: 26 },
//   ];
//   let arr2=[];
//   let f = arr3.filter((value, index, array) => {
//     if (value.age === 20) {
//       arr2.push(value);
//     }
//   });
// console.log(arr2);

//weakmap()
//  let a =  new WeakMap();
//  let user={
//     name:"soumya",
//     age:89
//  }
//  a.set(user,"ranjan")//set the key
//  console.log(a.get(user));
//  console.log(a.delete(user));
//  console.log(a.has(user));

//  var arr=["a","b","c"]
//  insert "z" at index 0
//  arr.splice(0,0,"z")
// arr.unshift("z")
// arr=["z",...arr]
//  console.log(arr);

// const mark=[1,2,3]
// const rollno=[4,5,6]
//Merge this 2 array
//solve it using two way

// const merged=[...mark,...rollno]
// const merged=mark.concat(rollno)
// console.log(merged);

// let age = "51"
// let value="54"
// age=age+1;
// value++;
// console.log(age); //511
// console.log(value); //55

// const num1=345;
// const num2=687;
// //add that number but not using + operator
// const result = num1 - -num2;
// console.log(result);

// const num1 =1000000;
// const num2 =10_000_00;
// console.log(num1===num2); //because,ES6 new feature to separate large number for better readability

// const arr = [
//     { id: 12, marks: 34 },
//     { id: 13, marks: 56 },
//     { id: 14, marks: 64 }
// ];

 //check if any student is fail or not in a an array in different ways
//  const passingmark=33;
//  const  failed =arr.some(function(element){
//         return element.marks<passingmark;
//  })
//  console.log(failed);

// const  failed =arr.every(function(element){
//     return element.marks<passingmark;
// })
// console.log(failed);

// const result = arr.map(student => {
//     return {
//         status: student.marks >= passingmark ? 'Pass' : 'Fail'
//     };
// });
// console.log(result);

// const result1=arr.forEach(student => {
//    return student.status = student.marks >= passingmark ? 'Pass' : 'Fail';
// });
// console.log(result);

// function show(){
//     console.log("wow");
// }

// show(); //Not Allowed
// console.log(window.show); //1st way
// const functionname= "show"; //2nd way
// window[functionname]();

// let flag = 0;
// setInterval(function(){
//     console.log("Inside interval");
//     console.log(flag++);
// },1000)
//condition is to stop the time after 3s
// let flag = 0;
// const id=setInterval(function(){
//     console.log("Inside interval");
//     console.log(flag++);
//     if(flag>3){
//         clearInterval(id)
//     }
// },1000)

//array.at() Newly added in JS2022
// const arr =[4,2,3,4,5,8]
//Before ES2022
// const last= arr[arr.length-1];
//Now ES2022
// const last =arr.at(-1)
// const first=arr.at(0)
// const secondlast=arr.at(-2)
// console.log(last);

//Array methods in Modern javascript 

//forEach()
// array.forEach(function(currentValue, index, array,extraparameter) {
    // code to be executed for each element
//   }, extraparameter);
// const number =[1,2,3,4,5]  
// number.forEach(function(element){
//     console.log(element)
// })

//map():returns a new array
// const number =[1,2,3,4,5]  
// const numbers =number.map((element)=>{
// return element*element
// })
// console.log(numbers);

//find():used to find single element in an array
// const number =[1,2,3,4,5]  
// const findno=number.find((element)=>{
//     return element%2===0
// })
// console.log(findno);

//findindex(): used to find the index of element in an array: return the index of first match of array
// const number =[1,2,3,4,5]  
// const findno=number.findIndex((element)=>{
//     return element%2===0
// })
// console.log(findno);

//includes():used to check if an array contains specific value ,retuns true or false
// const  arr=["e","t","t","y","u"]
// const hasdata=arr.includes("y")
// console.log(hasdata);

//OTP generator
// function generateOtp(length){
//     let otp=""
//     for(let i=0;i<length;i++){
//         otp+=Math.floor(Math.random()*10)
//     }
//     return otp
// }
// console.log(generateOtp(6))
