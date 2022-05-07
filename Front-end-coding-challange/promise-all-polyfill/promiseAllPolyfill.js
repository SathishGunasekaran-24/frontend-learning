/*
The Promise.all() accepts an array of promises and returns a promise
that resolves when all of the promises in the array are fulfilled or
when the iterable contains no promises. It rejects with the reason of
the first promise that rejects.

Polyfill for Promise.all()
After reading the definition of Promise.all() we can break down the 
problem in sub-problem and tackle it one by one.

1.It will return a promise.
2.The promise will resolve with result of all the passed promises or 
reject with the error message of first failed promise.
3.The results are returned in the same order as the promises are in 
the given array.
*/

function promiseAllPolyfill(promises) {
  let results = [];
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    promises.map((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;
          if (promises.length === promisesCompleted) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

function timer(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(seconds), seconds);
  });
}

const taskList = [timer(1000), timer(2000), timer(3000)];
promiseAllPolyfill(taskList)
  .then((results) => console.log("got results", results))
  .catch((error) => console.log(error));
