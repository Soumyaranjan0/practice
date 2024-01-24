//To find all the odd number between 1 to 100
// const getoddno = (start, end) => {
//   oddno = []
//   for (i = start; i <= end; i++) {
//     if (i % 2 != 0) {
//       oddno.push(i)
//     }
//   }
//   return oddno;
// };
// const result = getoddno(1, 50);
// console.log(result)

//To find a prime number
// let primeno=(number)=>{
//   if (number<=1){
//     return "this is not a prime number"
//   }
//   for(i=2;i <= Math.sqrt(number);i++){
//         if (number%i===0){
//           return "This is not a prime number"
//         }
//   }
//   return "This is a prime number"
// }
// let putno=primeno(2);
// console.log(putno)
//Reverse a string
// let string = "Soumya is a good boy"
// let reverse = [];
// let ReverseString = (str) => {
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// }
// const reversedstring = ReverseString(string);
// console.log(reversedstring)

// const a = "Soumya";
// const b = a.split("").reverse().join("");
// console.log(b)

//node js server using express
// import express from "express";
// const app = express();
// const port=3000;
// app.get((req,res)=>{
//   console.log("hello World");
// })
// app.listen(()=>{
//   console.log(`Connection successfully app is running at &{port}`);
// })
//using only node.js
// import http from "http";
// const port =3000;
// const server =http.createServer((req,res)=>{
// res.end("Helo World!")
// })
// server.listen(port,()=>{
//  console.log(`server is running on port no &{port}`)
// })

//const arr =[7,9,11,15,17,19]
//find the missing odd no o/p 13
// const arr = [7,9,11,15,17,19]
// for(let i=0;i<arr.length;i++){
// let start=arr[i]
// let end =start+2
// if(arr[i+1]===end)continue;
// else{
//   console.log(end);
//   break;
// }
// }
// const arr = [7,9,11,15,17,19]
// for(let i=0;i<arr.length;i++){
// let start=arr[i]
// let end =start+2
// if(arr[i+1]!==end){
//   console.log(end);
//   break;
// }
// }

// let number = 8;
// let result = Math.sqrt(number);
// console.log(result);

//to print start
// function printingstar(row){
// for(let i=1;i<=row;i++){
//   let star='';
//  for(let j=1;j<=i;j++){
//    star += "*"
//  }
//  console.log(star);
// }
// }
// let row1 =5;
// printingstar(row1)
// function printingstar(row){
// for(let i=row;i>=1;i--){
//   let star='';
//  for(let j=1;j<=i;j++){
//    star += "*"
//  }
//  console.log(star);
// }
// }
// let row =5;
// printingstar(row)

