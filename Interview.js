//1//find the duplicate element of an array.
// const arrNumber=[1,2,8,2,9,8,5,6,9]
// const duplicates=arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicates);
//Another way
// function findDuplicates(arr) {
//     const sortedArr = arr.sort();
//     // console.log(sortedArr);
//     const duplicates = [];

//     for (let i = 0; i < sortedArr.length; i++) {
//       if (sortedArr[i] === sortedArr[i + 1]) {
//         duplicates.push(sortedArr[i]);
//       }
//     }

//     return duplicates;
//   }
//   console.log(findDuplicates(arrNumber));

//2//How to find maximum and minimum array in javascript
// const arrNumber = [1, 3, 5, 5, 55, 63, 1, 67, 89, 4];
// const max = () => {
//   return arrNumber.reduce((pre, cur) => {
//     return pre > cur ? pre : cur;
//   });
// };
// const min = () => {
//   return arrNumber.reduce((pre, cur) => {
//     return pre < cur ? pre : cur;
//   });
// };
// console.log(max(arrNumber));

//another method
// const maxNumber = Math.max(...arrNumber);
// const minNumber = Math.min(...arrNumber);

//another method
// let maxNumber = arrNumber[0];
// let minNumber = arrNumber[0];
// // Iterate through the array to find max and min
// for (let i = 1; i < arrNumber.length; i++) {
//   if (arrNumber[i] > maxNumber) {
//     maxNumber = arrNumber[i];
//   }

//   if (arrNumber[i] < minNumber) {
//     minNumber = arrNumber[i];
//   }
// }
// console.log("Maximum Number:", maxNumber);
// console.log("Minimum Number:", minNumber);

//3//How to find the second largest value of n array
// const intArray=[2,8,9,7]
// const largestvalue=(arr)=>{
//     const firstlargestvalue=Math.max(...arr)
//     let index=arr.indexOf(firstlargestvalue)
//     arr.splice(index,1)
//     const secondlargestvalue=Math.max(...arr)

//     return firstlargestvalue
//     // return secondlargestvalue
// }
// console.log(largestvalue(intArray));
//Another way
// const largest=intArray.sort((a,b)=>b-a)
// const secondlargest=largest[1]
// console.log(secondlargest);

//4//Find the missing number between 1 to 10
// const array=[1,3,4,5,6,8,10]
// const missingelement=[];
// const missingNumber=(item)=>{
// const min=Math.min(...array)
// const max=Math.max(...array)
// for(let i=min;i<max;i++){
//     if(item.indexOf(i)<0){
//         missingelement.push(i)
//     }
// }
// return missingelement;
// }
// console.log(missingNumber(array));
//another Method
// const array = [1, 3, 4, 5, 6, 8, 10];
// // Iterate through numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   // Check if the current number is missing in the array
//   if (!array.includes(i)) {
//     console.log("Missing Number:", i);
//  // Stop the loop once the missing number is found
//   }
// }

//5//find even and odd number in a given array
// var arrNumber = [3, 45, 46, 75, 89, 28];
// const even = [];
// const odd = [];
// const findNumber = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arrNumber[i] % 2 == 0) {
//       even.push(arrNumber[i]);
//     }
//     if (arrNumber[i] % 2 == 1) {
//       odd.push(arrNumber[i]);
//     }
//   }
//   return odd
// };
// console.log(findNumber(arrNumber));

//another method
// const even =arrNumber.filter((items)=>{
//       return items % 2===0
// })
// console.log(even);
// const odd =arrNumber.filter((items)=>{
//       return items % 2===1
// })
// console.log(odd);

//6//Find the sum of all element in array
// const arrNumber=[2,4,5,7,5,2]
// const result=(items)=>{
// return items.reduce((pre,current)=>{return pre+current})
// }
// console.log(result(arrNumber));

//7//find the factorial of a given number
// const factorial=(item)=>{
//     if(item<=0){
//         return 1
//     }
// return item*factorial(item-1)
// }
// let item=5;
// console.log(factorial(item));

//Another way
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result =result*i; //or result*=1
//     }
//     return result;
// }
// // Example: Calculate the factorial of 5
// var result = factorial(5);
// console.log(result); // Output: 120

//8//Find the prime number of an array
// const findPrimenumber = (item) => {
//   if (item <= 1) {
//     return "Not prime number";
//   }
//       for (let i = 2;i<item; i++) {
//         if (item % i == 0) {
//           return "Number is not prime"
//         }
//       }
//       return "NUmber is prime"
//   };
// const isprime=findPrimenumber(69)
// console.log(isprime);

//9//Find the vowel from a string
// const vowels = "aeiouAEIOU";
// let result = [];
// function findVowels(str) {
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             result.push(char);
//         }
//     }
//     return result;
// }
// var vowelsInHelloWorld = findVowels("Hello World");
// console.log(vowelsInHelloWorld);

//find no of vowel
// const vowels = "aeiouAEIOU";
// let result = 0;
// function findVowels(str) {
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             result++;
//         }
//     }
//     return result;
// }
// var vowelsInHelloWorld = findVowels("Hello World");
// console.log(vowelsInHelloWorld);

//Another way
// function findVowelsFilter(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     return str.split('').filter(char => vowels.includes(char));
// }
// var vowelsInHelloWorld = findVowelsFilter("Hello World");
// console.log(vowelsInHelloWorld); // Output: [ 'e', 'o', 'o' ]

//10//Reverse an string
// const reversestring = (str) => {
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     return reverse;
// };
// const string = "soumya is a good boy";
// console.log(reversestring(string));

//11//Reverse the word without changing its position
// const originalString = "soumya is a good boy";
// function reverseCharacters(str) {
//     const words = str.split(' ');
//     const reversedWords = words.map(word => word.split('').reverse().join(''));
//     return reversedWords.join(' ');
// }
// const reversedString = reverseCharacters(originalString);
// console.log(reversedString);

//12//palindrom in javascript
// let string="Madam";
// string=string.toLocaleLowerCase();
// let reverse = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }
// if (string==reverse){
//     console.log("Number is palindrom");
// }else{
//     console.log("number is not palindrom");
// }

//Another way to resolve this
// let string="Madam";
// string=string.toLocaleLowerCase();
// let palindrom=string.split("").reverse().join("")
// if (string===palindrom){
//  console.log("number is Palindrom");
// }else{
//     console.log("Number is not palindrom");
// }

//13//swap two variables with using third variables
// var a =5;
// var b =6;
// let temp=a;
// a=b;
// b=temp;
// console.log(a);
// console.log(b);
//without using third variable
//by destructuring
// var a =5;
// var b =6;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

//14//Merging two array
// let arr1=[1,3,5,4,7,89]
// let arr2=[34,2,67,8]
//By conact
// let merge=arr1.concat(arr2).sort((a,b)=>a-b)
//By spread operator
// let merge=[...arr1,...arr2].sort((a,b)=>a-b)
// console.log(merge);

//15//finc the factors of an integer
// let number=-15;
// for(let i=0;i<=number;i++){
//     if(number%i==0){
//         console.log(`${i}`);
//     }
// }
// if(number<=0){
//     console.log("Finding factors are not possible");
// }
//16//How to compare two array is equal or not.
// var arr1=[2,9,6,8,4]
// var arr2=[4,8,6,9,2]
// const isarray=arr1.length===arr2.length && arr1.every((curelm)=>{
//  if(arr2.indexOf(curelm)>-1){
// return (curelm=[arr2.indexOf(curelm)])
//  }
// })
// console.log(`Array lenth compare ${isarray}`);

//17//Intersection of two array
// let arr1=[2,9,6,8,4,4,4]
// let arr2=[4,8,6,9,12]
// let intersection=arr1.filter((element)=>{
//     return arr2.includes(element)
// })
// console.log(intersection);
//For removing dupliactes numbers
// console.log([...new Set(intersection)]);

//18//find the union of two array
// let arr1=[2,9,6,8,4,4,4]
// let arr2=[4,8,6,9,12]
// let union=[...arr1,...arr2]
// console.log(...new Set(union));

//ES-6=ECMAScript2015-europian Computer Manufacturers Association Script 2015

//19//celecius to farenhite
// const celcius =37;
// let celciustofarenhite=(celcius)=>{
// return ((9/5)*celcius)+32;
// }
// console.log(celciustofarenhite(celcius));
//20//Farenhite to celcius
// var farenhite1=103;
// var farenhitetocelcius=5/9*(farenhite1-32)
// console.log(farenhitetocelcius);

//Conversion of km to miles
//1k.m=0.621371miles
//Miles=km*factor(factor=0.621371)
// const km=5;
// const kmtomiles=km*0.621371
// console.log(kmtomiles);

//21//To convert first letter of a string is in uppercase
// let string="soumya is a good boy";
// const convertfirstletter=(str)=>{
//     var newstr=string.split(" ")
//     const convert=newstr.map((element)=>{
//         return element.charAt(0).toLocaleUpperCase() + element.slice(1)

//     })
//     return convert.join(" ")
// }
// console.log(convertfirstletter(string))

//22//Fibbonacci Series
// const FibbonacciSeries=(num)=>{
//     let arr=[0,1]
//     for(let i=2;i<num;i++){
//     arr.push(arr[i-1]+arr[i-2])
//     }
//     return arr;
// }
// console.log(FibbonacciSeries(10));
//output:[ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
//Another way
// let fibbo=10;
// var a=0;
// var b=1;
// for(let i=0;i<fibbo;i++){
//     let temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp);
// }
//output:1 2 3 5 8 13 21 34 55 89

//23//Program to print star and number patters right triangle,pyramid and diamond shape in javascript.
//right Triangle
// function printRightAngleTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += '*';
//       }
//       console.log(row);
//     }
//   }
//   // Example: Print a right-angled triangle with height 5
//   printRightAngleTriangle(5);
//Without Function
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += '*';
//     }
//     console.log(row);
//   }

//Pyramid
// Set the height of the pyramid
// const height = 5;
// Outer loop: iterate through each row of the pyramid
// for (let i = 1; i <= height; i++) {
//   // Inner loop 1: add spaces before the asterisks
//   for (let j =1; j<=5-i; j++) {
//     process.stdout.write(' ');
//   }
//   // Inner loop 2: add asterisks
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write('*'+" ");
//   }
//   // Move to the next line after each row
//   console.log();
// }
//another way in html file
// for (let i = 1; i <= height; i++) {
//     // Inner loop 1: add spaces before the asterisks
//     for (let j =1; j<=5-i; j++) {
//       document.write("&nbsp;&nbsp;")
//     }
//     // Inner loop 2: add asterisks
//     for (let k = 1; k <= i; k++) {
//       document.write("*"+"&nbsp;&nbsp;")
//     }
//     // Move to the next line after each row
//     document.write("<br>");
//   }

//Diamond
// for (let i = 1; i <= height; i++) {
//     // Inner loop 1: add spaces before the asterisks
//     for (let j =1; j<=5-i; j++) {
//       process.stdout.write(' ');
//     }
//     // Inner loop 2: add asterisks
//     for (let k = 1; k <= i; k++) {
//       process.stdout.write('*'+" ");
//     }
//     // Move to the next line after each row
//     console.log();
//   }
// for (let i = 1; i <= height; i++) {
//     // Inner loop 1: add spaces before the asterisks
//     for (let j =1; j<=i; j++) {
//       process.stdout.write(' ');
//     }
//     // Inner loop 2: add asterisks
//     for (let k = 1; k <=5-i; k++) {
//       process.stdout.write('*'+" ");
//     }
//     // Move to the next line after each row
//     console.log();
//   }


//24//find the number of occurances of a character in a string;
// var string="Soumya is a good boy";
// var letter="s"
// var count =0;
// for(let i=0;i<=string.length;i++){
// if(string[i]==letter){
//     count++;
// }
// }
// console.log(count);

//25//print the table of any user defined number;
// var table=(number)=>{
// for(let i=1;i<=10;i++){
//     var arraystoredtable=i*number;
//     console.log(`${number}*${i}=${arraystoredtable}`);
// }
// }
// table(4);

//26//To find a number is Armstrong or Not;
// let number =153;
// let numstring=number.toString();
// let numlength=numstring.length;
// let sum=0;
// for(let digit of numstring){
//     sum+=Math.pow(digit,numlength)
// }
// if(number===sum){
//     console.log("The number is an Armstrong Number");
// }else{
//     console.log("The is not an Armstrong Number");
// }
