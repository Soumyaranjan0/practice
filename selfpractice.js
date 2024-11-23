// Creating three promises
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 3 resolved'), 1500);
});

// Adding promises to an array
const promiseArray = [promise1, promise2, promise3];

// Executing promises in parallel using Promise.all
Promise.all(promiseArray)
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One of the promises failed:', error);
    });
