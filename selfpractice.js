
const promise1= new Promise((resolve, reject) => {
    document.getElementById("d1").addEventListener('click', () => {
    resolve('Promise1 is resolved');});
});
promise1.then((value) => { 
    console.log(value) ;
})