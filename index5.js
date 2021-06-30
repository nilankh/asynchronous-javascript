// Promises
// Promises hold the eventual result of an asynchronous operation

const promise = new Promise(function (resolve, reject) {
  // Kick off some async work
  // ...
  setTimeout(() => {
    // resolve(1); //pending => resolved, fullfilled
    reject(new Error("message")); //pending => rejected
  }, 2000);
});

promise
  .then((result) => console.log("Result", result))
  .catch((err) => console.log("Error", err.message));
