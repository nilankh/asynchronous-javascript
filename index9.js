// Running paralle promises

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

// If one of the promise fails
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async operation 1...");
//     reject(new Error ('because of something failed.'));
//   }, 2000);
// });

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2....");
    resolve(2);
  }, 2000);
});
// when this both complete we want to do something after

// Promise.all([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log('Error', err.message));

//   sometimes we want to kickoff multiple async operations but we want to do some thing as soon as one of the async operation get completed(tum sb ke lia wait ni krna chah rhe ho jaise hi ek khtm ho, ypou want to do something. )

Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));