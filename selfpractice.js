let a = "soumya";
let b = "dibya 5638";

let result=""
for(let i=0;i<a.length || i<b.length ;i++){
  if(i<a.length){
    result+=a[i]
  }if(i<b.length){
    result+=b[i]
  }
}
console.log(result);