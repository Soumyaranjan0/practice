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
//another way to resolve this
let string="Madam";
string=string.toLocaleLowerCase();
let palindrom=string.split("").reverse().join("")
if (string===palindrom){
 console.log("number is Palindrom");
}else{
    console.log("Number is not palindrom");
}