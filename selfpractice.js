let arr = [[1, 2], [3, 4], [5, 6]];
let flatarr=arr.reduce((acc,cur)=>[cur,...acc],[])
console.log(flatarr);