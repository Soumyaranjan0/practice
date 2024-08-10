let array=[2,56,3,5,7,9]
let sorted=(array)=>{
    for(let  j=0;j<array.length-1;j++){
        if(array[j]>array[j+1]){
            let temp =array[j];
            array[j]=array[j+1];
            array[j+1]=temp
        }
    }
return array;
}
console.log(sorted(array))